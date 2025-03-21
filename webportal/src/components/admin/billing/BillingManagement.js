'use client';

import { useState, useEffect } from 'react';

// Custom date formatting function to replace date-fns
const formatDate = (date, format = 'yyyy-MM-dd') => {
  if (!date) return '';
  
  const d = new Date(date);
  
  if (isNaN(d.getTime())) return '';
  
  // Format for yyyy-MM-dd
  if (format === 'yyyy-MM-dd') {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }
  
  // Format for Month d, yyyy (e.g., January 1, 2023)
  if (format === 'MMMM d, yyyy') {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  }
  
  // Default fallback
  return d.toLocaleDateString();
};

// Mock invoices data
const mockInvoices = Array.from({ length: 30 }, (_, i) => {
  const statuses = ['paid', 'pending', 'overdue', 'canceled'];
  const customers = [
    { id: 1, name: 'Acme Corporation', email: 'billing@acmecorp.com' },
    { id: 2, name: 'Globex Industries', email: 'accounts@globex.com' },
    { id: 3, name: 'Stark Enterprises', email: 'finance@stark.com' },
    { id: 4, name: 'Wayne Industries', email: 'payments@wayne.com' },
    { id: 5, name: 'Umbrella Corp', email: 'finance@umbrella.com' },
  ];
  
  const customer = customers[Math.floor(Math.random() * customers.length)];
  
  // Generate a random date within the last 6 months
  const date = new Date();
  date.setMonth(date.getMonth() - Math.floor(Math.random() * 6));
  
  // Due date is 30 days after invoice date
  const dueDate = new Date(date);
  dueDate.setDate(dueDate.getDate() + 30);
  
  // Random amount between $100 and $10000
  const amount = Math.floor(Math.random() * 9900) + 100;
  
  return {
    id: `INV-${String(date.getFullYear()).substring(2)}${String(date.getMonth() + 1).padStart(2, '0')}-${String(1000 + i).substring(1)}`,
    date: date,
    dueDate: dueDate,
    customer: customer,
    amount: amount,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    description: `Cloud Services - ${['Basic', 'Professional', 'Enterprise', 'Custom'][Math.floor(Math.random() * 4)]} Plan`,
    items: [
      {
        name: 'Cloud Hosting',
        quantity: Math.floor(Math.random() * 10) + 1,
        unitPrice: Math.floor(Math.random() * 100) + 50,
      },
      {
        name: 'Storage',
        quantity: Math.floor(Math.random() * 5) + 1,
        unitPrice: Math.floor(Math.random() * 50) + 20,
      },
      {
        name: 'Support Hours',
        quantity: Math.floor(Math.random() * 20),
        unitPrice: 75,
      }
    ]
  };
});

// Payment methods mock data
const mockPaymentMethods = [
  { id: 1, name: 'Credit Card', fee: '2.9% + $0.30', active: true },
  { id: 2, name: 'PayPal', fee: '3.5% + $0.30', active: true },
  { id: 3, name: 'Bank Transfer', fee: '$15 flat fee', active: true },
  { id: 4, name: 'Cryptocurrency', fee: '1%', active: false },
];

export default function BillingManagement() {
  const [activeTab, setActiveTab] = useState('invoices');
  const [invoices, setInvoices] = useState([]);
  const [filteredInvoices, setFilteredInvoices] = useState([]);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dateRange, setDateRange] = useState({ start: null, end: null });
  
  useEffect(() => {
    // Simulate API call
    const fetchBillingData = async () => {
      setLoading(true);
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        setInvoices(mockInvoices);
        setPaymentMethods(mockPaymentMethods);
      } catch (error) {
        console.error('Error fetching billing data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBillingData();
  }, []);
  
  // Filter invoices based on current filters
  useEffect(() => {
    let filtered = [...invoices];
    
    // Filter by status
    if (filterStatus !== 'all') {
      filtered = filtered.filter(invoice => invoice.status === filterStatus);
    }
    
    // Filter by date range
    if (dateRange.start) {
      filtered = filtered.filter(invoice => new Date(invoice.date) >= new Date(dateRange.start));
    }
    if (dateRange.end) {
      filtered = filtered.filter(invoice => new Date(invoice.date) <= new Date(dateRange.end));
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(invoice => 
        invoice.id.toLowerCase().includes(query) ||
        invoice.customer.name.toLowerCase().includes(query) ||
        invoice.customer.email.toLowerCase().includes(query) ||
        invoice.description.toLowerCase().includes(query)
      );
    }
    
    // Sort by date (newest first)
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    setFilteredInvoices(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [invoices, filterStatus, searchQuery, dateRange]);
  
  // Get current invoices for pagination
  const indexOfLastInvoice = currentPage * itemsPerPage;
  const indexOfFirstInvoice = indexOfLastInvoice - itemsPerPage;
  const currentInvoices = filteredInvoices.slice(indexOfFirstInvoice, indexOfLastInvoice);
  const totalPages = Math.ceil(filteredInvoices.length / itemsPerPage);
  
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  // View invoice details
  const viewInvoiceDetails = (invoice) => {
    setSelectedInvoice(invoice);
  };
  
  // Close modal
  const closeModal = () => {
    setSelectedInvoice(null);
  };
  
  // Get badge color based on invoice status
  const getStatusBadgeColor = (status) => {
    switch(status) {
      case 'paid': return 'badge-success';
      case 'pending': return 'badge-warning';
      case 'overdue': return 'badge-error';
      case 'canceled': return 'badge-ghost';
      default: return 'badge-ghost';
    }
  };
  
  // Calculate invoice total
  const calculateInvoiceTotal = (items) => {
    return items.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0);
  };
  
  // Toggle payment method active status
  const togglePaymentMethodStatus = (id) => {
    setPaymentMethods(prevMethods => 
      prevMethods.map(method => 
        method.id === id ? { ...method, active: !method.active } : method
      )
    );
  };
  
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b">
        <button 
          className={`px-4 py-3 text-sm font-medium ${activeTab === 'invoices' ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('invoices')}
        >
          Invoices & Payments
        </button>
        <button 
          className={`px-4 py-3 text-sm font-medium ${activeTab === 'settings' ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('settings')}
        >
          Billing Settings
        </button>
        <button 
          className={`px-4 py-3 text-sm font-medium ${activeTab === 'reports' ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('reports')}
        >
          Financial Reports
        </button>
      </div>
      
      {/* Content based on active tab */}
      {activeTab === 'invoices' && (
        <>
          {/* Filter Controls */}
          <div className="p-4 border-b space-y-4">
            <div className="flex flex-wrap gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Status</span>
                </label>
                <select 
                  className="select select-bordered select-sm w-full max-w-xs"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="all">All Statuses</option>
                  <option value="paid">Paid</option>
                  <option value="pending">Pending</option>
                  <option value="overdue">Overdue</option>
                  <option value="canceled">Canceled</option>
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
                  placeholder="Search invoices..."
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
            
            <div className="flex justify-end">
              <button className="btn btn-primary">
                Create New Invoice
              </button>
            </div>
          </div>
          
          {/* Invoices Table */}
          <div className="overflow-x-auto">
            {loading ? (
              <div className="flex justify-center items-center p-8">
                <div className="loading loading-spinner loading-lg"></div>
              </div>
            ) : currentInvoices.length === 0 ? (
              <div className="text-center p-8 text-gray-500">
                No invoices found matching your criteria.
              </div>
            ) : (
              <table className="table table-zebra w-full">
                <thead>
                  <tr>
                    <th>Invoice #</th>
                    <th>Date</th>
                    <th>Customer</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentInvoices.map((invoice) => (
                    <tr key={invoice.id} className="hover">
                      <td className="font-medium">{invoice.id}</td>
                      <td>{formatDate(invoice.date, 'yyyy-MM-dd')}</td>
                      <td>
                        <div>{invoice.customer.name}</div>
                        <div className="text-xs text-gray-500">{invoice.customer.email}</div>
                      </td>
                      <td className="font-medium">
                        ${calculateInvoiceTotal(invoice.items).toFixed(2)}
                      </td>
                      <td>
                        <span className={`badge ${getStatusBadgeColor(invoice.status)}`}>
                          {invoice.status}
                        </span>
                      </td>
                      <td>
                        <div className="flex gap-2">
                          <button 
                            onClick={() => viewInvoiceDetails(invoice)}
                            className="btn btn-xs btn-outline"
                          >
                            View
                          </button>
                          <button className="btn btn-xs btn-primary">
                            {invoice.status === 'paid' ? 'Receipt' : 'Pay'}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          
          {/* Pagination */}
          {!loading && filteredInvoices.length > 0 && (
            <div className="py-4 px-6 flex justify-between items-center border-t">
              <div className="text-sm text-gray-600">
                Showing {indexOfFirstInvoice + 1} - {Math.min(indexOfLastInvoice, filteredInvoices.length)} of {filteredInvoices.length} invoices
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
        </>
      )}
      
      {activeTab === 'settings' && (
        <div className="p-6 space-y-8">
          <div>
            <h3 className="text-lg font-medium mb-4">Payment Methods</h3>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Payment Method</th>
                    <th>Transaction Fee</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentMethods.map((method) => (
                    <tr key={method.id}>
                      <td>{method.name}</td>
                      <td>{method.fee}</td>
                      <td>
                        <span className={`badge ${method.active ? 'badge-success' : 'badge-ghost'}`}>
                          {method.active ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td>
                        <button 
                          className={`btn btn-sm ${method.active ? 'btn-error' : 'btn-success'}`}
                          onClick={() => togglePaymentMethodStatus(method.id)}
                        >
                          {method.active ? 'Disable' : 'Enable'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="divider"></div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Invoice Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Company Name</span>
                </label>
                <input 
                  type="text" 
                  className="input input-bordered" 
                  value="ASP Cloud Solutions Ltd." 
                  readOnly
                />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Tax ID / VAT Number</span>
                </label>
                <input 
                  type="text" 
                  className="input input-bordered" 
                  value="UK12345678901" 
                  readOnly
                />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Invoice Prefix</span>
                </label>
                <input 
                  type="text" 
                  className="input input-bordered" 
                  defaultValue="INV-" 
                />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Default Payment Terms (Days)</span>
                </label>
                <input 
                  type="number" 
                  className="input input-bordered" 
                  defaultValue="30" 
                />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Default Currency</span>
                </label>
                <select className="select select-bordered">
                  <option value="USD">USD - US Dollar</option>
                  <option value="EUR">EUR - Euro</option>
                  <option value="GBP">GBP - British Pound</option>
                  <option value="JPY">JPY - Japanese Yen</option>
                </select>
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Tax Rate (%)</span>
                </label>
                <input 
                  type="number" 
                  step="0.01" 
                  className="input input-bordered" 
                  defaultValue="20.00" 
                />
              </div>
            </div>
            
            <div className="mt-6">
              <button className="btn btn-primary">Save Settings</button>
            </div>
          </div>
          
          <div className="divider"></div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Email Notifications</h3>
            <div className="space-y-4">
              <div className="form-control">
                <label className="label cursor-pointer justify-start gap-3">
                  <input type="checkbox" className="checkbox checkbox-primary" defaultChecked />
                  <span className="label-text">Send invoice notifications to customers</span>
                </label>
              </div>
              
              <div className="form-control">
                <label className="label cursor-pointer justify-start gap-3">
                  <input type="checkbox" className="checkbox checkbox-primary" defaultChecked />
                  <span className="label-text">Send payment receipt confirmations</span>
                </label>
              </div>
              
              <div className="form-control">
                <label className="label cursor-pointer justify-start gap-3">
                  <input type="checkbox" className="checkbox checkbox-primary" defaultChecked />
                  <span className="label-text">Send payment reminders for overdue invoices</span>
                </label>
              </div>
              
              <div className="form-control">
                <label className="label cursor-pointer justify-start gap-3">
                  <input type="checkbox" className="checkbox checkbox-primary" defaultChecked />
                  <span className="label-text">Notify administrators of new payments</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'reports' && (
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-base-100 p-4 rounded-lg shadow-sm border">
              <div className="text-sm font-medium text-gray-500 mb-1">Total Revenue (YTD)</div>
              <div className="text-2xl font-bold">$245,678.90</div>
              <div className="text-sm text-success mt-1">↑ 12.3% from last year</div>
            </div>
            
            <div className="bg-base-100 p-4 rounded-lg shadow-sm border">
              <div className="text-sm font-medium text-gray-500 mb-1">Outstanding Invoices</div>
              <div className="text-2xl font-bold">$42,150.75</div>
              <div className="text-sm text-gray-500 mt-1">15 invoices pending</div>
            </div>
            
            <div className="bg-base-100 p-4 rounded-lg shadow-sm border">
              <div className="text-sm font-medium text-gray-500 mb-1">Average Invoice Value</div>
              <div className="text-2xl font-bold">$3,875.45</div>
              <div className="text-sm text-success mt-1">↑ 5.2% from last month</div>
            </div>
            
            <div className="bg-base-100 p-4 rounded-lg shadow-sm border">
              <div className="text-sm font-medium text-gray-500 mb-1">Collection Rate</div>
              <div className="text-2xl font-bold">94.8%</div>
              <div className="text-sm text-success mt-1">↑ 2.1% from last month</div>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            <div className="w-full lg:w-2/3 bg-base-100 p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-medium mb-4">Revenue Trends</h3>
              <div className="h-80 bg-gray-100 rounded flex items-center justify-center">
                <p className="text-gray-500">Revenue chart will be displayed here</p>
              </div>
            </div>
            
            <div className="w-full lg:w-1/3 bg-base-100 p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-medium mb-4">Invoice Status Distribution</h3>
              <div className="h-80 bg-gray-100 rounded flex items-center justify-center">
                <p className="text-gray-500">Pie chart will be displayed here</p>
              </div>
            </div>
          </div>
          
          <div className="bg-base-100 p-6 rounded-lg shadow-sm border">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Financial Reports</h3>
              <div>
                <select className="select select-bordered select-sm">
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                </select>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Report</th>
                    <th>Last Generated</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Monthly Revenue Statement</td>
                    <td>August 31, 2023</td>
                    <td>
                      <button className="btn btn-sm btn-outline">Download PDF</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Quarterly Financial Report</td>
                    <td>June 30, 2023</td>
                    <td>
                      <button className="btn btn-sm btn-outline">Download PDF</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Annual Tax Statement</td>
                    <td>December 31, 2022</td>
                    <td>
                      <button className="btn btn-sm btn-outline">Download PDF</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Accounts Receivable Aging</td>
                    <td>September 15, 2023</td>
                    <td>
                      <button className="btn btn-sm btn-outline">Download PDF</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      
      {/* Invoice Details Modal */}
      {selectedInvoice && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold">Invoice #{selectedInvoice.id}</h3>
                  <p className="text-gray-600">
                    {formatDate(selectedInvoice.date, 'MMMM d, yyyy')}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="btn btn-sm btn-outline">Print</button>
                  <button className="btn btn-sm btn-outline">Download PDF</button>
                  <button 
                    onClick={closeModal}
                    className="btn btn-sm btn-circle"
                  >
                    ✕
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-1">Billed To</div>
                  <div className="font-medium">{selectedInvoice.customer.name}</div>
                  <div className="text-gray-600">{selectedInvoice.customer.email}</div>
                </div>
                
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-500 mb-1">Invoice Details</div>
                  <div>
                    <span className="font-medium">Due Date:</span> {formatDate(selectedInvoice.dueDate, 'MMMM d, yyyy')}
                  </div>
                  <div>
                    <span className="font-medium">Status:</span> 
                    <span className={`badge ${getStatusBadgeColor(selectedInvoice.status)} ml-2`}>
                      {selectedInvoice.status}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="font-medium mb-3">Invoice Items</h4>
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th className="text-right">Quantity</th>
                      <th className="text-right">Unit Price</th>
                      <th className="text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedInvoice.items.map((item, index) => (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td className="text-right">{item.quantity}</td>
                        <td className="text-right">${item.unitPrice.toFixed(2)}</td>
                        <td className="text-right">${(item.quantity * item.unitPrice).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="3" className="text-right font-medium">Subtotal</td>
                      <td className="text-right">${calculateInvoiceTotal(selectedInvoice.items).toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td colSpan="3" className="text-right font-medium">Tax (20%)</td>
                      <td className="text-right">${(calculateInvoiceTotal(selectedInvoice.items) * 0.2).toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td colSpan="3" className="text-right font-bold">Total</td>
                      <td className="text-right font-bold">${(calculateInvoiceTotal(selectedInvoice.items) * 1.2).toFixed(2)}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              
              <div className="border-t pt-6 flex justify-between">
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-1">Notes</div>
                  <p className="text-gray-600">
                    Thank you for your business. Payment is due within 30 days from the date of invoice.
                  </p>
                </div>
                
                {selectedInvoice.status !== 'paid' && (
                  <button className="btn btn-primary">Pay Now</button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
