import Image from 'next/image';

export default function ConsultancyTeam() {
  const team = [
    {
      id: 1,
      name: "Ahmet Yılmaz",
      title: "Baş Danışman",
      image: "/images/team/consultant1.jpg",
      description: "15 yıllık sektör deneyimiyle işletmelere stratejik danışmanlık hizmetleri sunuyor."
    },
    {
      id: 2,
      name: "Ayşe Kaya",
      title: "Dijital Dönüşüm Uzmanı",
      image: "/images/team/consultant2.jpg",
      description: "Dijital dönüşüm sürecinde işletmelere rehberlik ediyor."
    },
    {
      id: 3,
      name: "Mehmet Demir",
      title: "Veri Analisti",
      image: "/images/team/consultant3.jpg",
      description: "İşletme verilerini analiz ederek, karar verme süreçlerini iyileştiriyor."
    },
    {
      id: 4,
      name: "Zeynep Aksoy",
      title: "İş Süreçleri Uzmanı",
      image: "/images/team/consultant4.jpg",
      description: "İş süreçlerinin optimizasyonu konusunda uzmanlaşmış danışman."
    }
  ];

  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Uzman Danışmanlık Ekibimiz</h2>
          <p className="text-lg max-w-2xl mx-auto text-base-content/80">
            Alanında uzman ve deneyimli danışmanlarımızla işletmenize değer katıyoruz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map(member => (
            <div key={member.id} className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <figure className="px-4 pt-4">
                <div className="relative w-full h-64 rounded-xl overflow-hidden">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-xl"
                  />
                </div>
              </figure>
              <div className="card-body pt-4">
                <h3 className="card-title justify-center">{member.name}</h3>
                <p className="text-center font-medium text-primary">{member.title}</p>
                <p className="text-center text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
