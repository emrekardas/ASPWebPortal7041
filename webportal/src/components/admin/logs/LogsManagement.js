'use client';

import { useState, useEffect } from 'react';

// Custom date formatting function to replace date-fns
const formatDate = (date, format = 'yyyy-MM-dd HH:mm:ss') => {
  if (!date) return '';
  
  const d = new Date(date);
  
  if (isNaN(d.getTime())) return '';
  
  // Format for yyyy-MM-dd HH:mm:ss
  if (format === 'yyyy-MM-dd HH:mm:ss') {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')}`;
  }
  
  // Format for PPpp which is a more human-readable format (e.g., Mar 25, 2023, 3:00 PM)
  if (format === 'PPpp') {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert to 12-hour format
    
    return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}, ${formattedHours}:${String(minutes).padStart(2, '0')} ${ampm}`;
  }
  
  // Default fallback
  return d.toLocaleString();
};

// Mock logs data
const mockLogs = Array.from({ length: 50 }, (_, i) => {
  const types = ['info', 'warning', 'error', 'debug'];
  const services = ['api', 'auth', 'database', 'storage', 'billing', 'user'];
  const users = ['system', 'admin', 'user12345', 'user67890', null];
  const messages = [
    'User login successful',
    'Failed authentication attempt',
    'Database connection error',
    'File uploaded successfully',
    'Payment processed',
    'User profile updated',
    'API rate limit exceeded',
    'Scheduled maintenance started',
    'Service restarted after failure',
    'Security alert: Multiple failed login attempts'
  ];
  
  // Generate a random date within the last 30 days
  const date = new Date();
  date.setDate(date.getDate() - Math.floor(Math.random() * 30));
  
  return {
    id: i + 1,
    timestamp: date,
    type: types[Math.floor(Math.random() * types.length)],
    service: services[Math.floor(Math.random() * services.length)],
    user: users[Math.floor(Math.random() * users.length)],
    message: messages[Math.floor(Math.random() * messages.length)],
    details: JSON.stringify({
      ip: `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      requestId: `req-${Math.random().toString(36).substring(2, 12)}`,
    }, null, 2)
  };
});

export default function LogsManagement() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [selectedLog, setSelectedLog] = useState(null);
  const [filterType, setFilterType] = useState('all');
  const [filterService, setFilterService] = useState('all');
  const [dateRange, setDateRange] = useState({ start: null, end: null });
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Simulate API call
    const fetchLogs = async () => {
      setLoading(true);
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        setLogs(mockLogs);
      } catch (error) {
        console.error('Error fetching logs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLogs();
  }, []);

  // Filter logs based on current filters
  const filteredLogs = logs.filter(log => {
    // Filter by type
    if (filterType !== 'all' && log.type !== filterType) return false;
    
    // Filter by service
    if (filterService !== 'all' && log.service !== filterService) return false;
    
    // Filter by date range
    if (dateRange.start && new Date(log.timestamp) < new Date(dateRange.start)) return false;
    if (dateRange.end && new Date(log.timestamp) > new Date(dateRange.end)) return false;
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        (log.message && log.message.toLowerCase().includes(query)) ||
        (log.service && log.service.toLowerCase().includes(query)) ||
        (log.user && log.user.toLowerCase().includes(query)) ||
        (log.details && log.details.toLowerCase().includes(query))
      );
    }
    
    return true;
  }).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)); // Sort by newest first

  // Get current logs for pagination
  const indexOfLastLog = currentPage * itemsPerPage;
  const indexOfFirstLog = indexOfLastLog - itemsPerPage;
  const currentLogs = filteredLogs.slice(indexOfFirstLog, indexOfLastLog);
  const totalPages = Math.ceil(filteredLogs.length / itemsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // View log details
  const viewLogDetails = (log) => {
    setSelectedLog(log);
  };

  // Close modal
  const closeModal = () => {
    setSelectedLog(null);
  };

  // Get badge color based on log type
  const getTypeBadgeColor = (type) => {
    switch(type) {
      case 'error': return 'badge-error';
      case 'warning': return 'badge-warning';
      case 'info': return 'badge-info';
      case 'debug': return 'badge-success';
      default: return 'badge-ghost';
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Filter Controls */}
      <div className="p-4 border-b space-y-4">
        <div className="flex flex-wrap gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Log Type</span>
            </label>
            <select 
              className="select select-bordered select-sm w-full max-w-xs"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="info">Information</option>
              <option value="warning">Warning</option>
              <option value="error">Error</option>
              <option value="debug">Debug</option>
            </select>
          </div>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text">Service</span>
            </label>
            <select 
              className="select select-bordered select-sm w-full max-w-xs"
              value={filterService}
              onChange={(e) => setFilterService(e.target.value)}
            >
              <option value="all">All Services</option>
              <option value="api">API</option>
              <option value="auth">Authentication</option>
              <option value="database">Database</option>
              <option value="storage">Storage</option>
              <option value="billing">Billing</option>
              <option value="user">User Management</option>
            </select>
          </div>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date Range</span>
            </label>
            <div className="flex gap-2">
              <input 
                type="date" 
                className="input input-bordered input-sm w-full max-w-xs" 
                value={dateRange.start || ''}
                onChange={(e) => setDateRange({...dateRange, start: e.target.value})}
              />
              <span className="self-center">to</span>
              <input 
                type="date" 
                className="input input-bordered input-sm w-full max-w-xs" 
                value={dateRange.end || ''}
                onChange={(e) => setDateRange({...dateRange, end: e.target.value})}
              />
            </div>
          </div>
        </div>
        
        <div className="form-control">
          <div className="input-group">
            <input 
              type="text"
              placeholder="Search logs..."
              className="input input-bordered w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-square">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Logs Table */}
      <div className="overflow-x-auto">
        {loading ? (
          <div className="flex justify-center items-center p-8">
            <div className="loading loading-spinner loading-lg"></div>
          </div>
        ) : currentLogs.length === 0 ? (
          <div className="text-center p-8 text-gray-500">
            No logs found matching your criteria.
          </div>
        ) : (
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Time</th>
                <th>Type</th>
                <th>Service</th>
                <th>User</th>
                <th>Message</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentLogs.map((log) => (
                <tr key={log.id} className="hover">
                  <td className="whitespace-nowrap">{formatDate(log.timestamp, 'yyyy-MM-dd HH:mm:ss')}</td>
                  <td>
                    <span className={`badge ${getTypeBadgeColor(log.type)}`}>
                      {log.type}
                    </span>
                  </td>
                  <td>{log.service}</td>
                  <td>{log.user || <span className="text-gray-400">system</span>}</td>
                  <td className="max-w-md truncate">{log.message}</td>
                  <td>
                    <button 
                      onClick={() => viewLogDetails(log)}
                      className="btn btn-xs btn-outline"
                    >
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      
      {/* Pagination */}
      {!loading && filteredLogs.length > 0 && (
        <div className="py-4 px-6 flex justify-between items-center border-t">
          <div className="text-sm text-gray-600">
            Showing {indexOfFirstLog + 1} - {Math.min(indexOfLastLog, filteredLogs.length)} of {filteredLogs.length} logs
          </div>
          
          <div className="btn-group">
            <button 
              className="btn btn-sm"
              onClick={() => paginate(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              «
            </button>
            
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              // Calculate which page numbers to show
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }
              
              return (
                <button 
                  key={pageNum}
                  className={`btn btn-sm ${currentPage === pageNum ? 'btn-active' : ''}`}
                  onClick={() => paginate(pageNum)}
                >
                  {pageNum}
                </button>
              );
            })}
            
            <button 
              className="btn btn-sm"
              onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              »
            </button>
          </div>
        </div>
      )}
      
      {/* Log Details Modal */}
      {selectedLog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Log Entry Details</h3>
                <button 
                  onClick={closeModal}
                  className="btn btn-sm btn-circle"
                >
                  ✕
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-sm font-medium text-gray-500">Timestamp</div>
                  <div>{formatDate(selectedLog.timestamp, 'PPpp')}</div>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-gray-500">Type</div>
                  <div>
                    <span className={`badge ${getTypeBadgeColor(selectedLog.type)}`}>
                      {selectedLog.type}
                    </span>
                  </div>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-gray-500">Service</div>
                  <div>{selectedLog.service}</div>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-gray-500">User</div>
                  <div>{selectedLog.user || <span className="text-gray-400">system</span>}</div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="text-sm font-medium text-gray-500">Message</div>
                <div className="mt-1">{selectedLog.message}</div>
              </div>
              
              <div>
                <div className="text-sm font-medium text-gray-500">Details</div>
                <pre className="mt-1 bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                  {selectedLog.details}
                </pre>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button 
                  onClick={closeModal}
                  className="btn btn-primary"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
