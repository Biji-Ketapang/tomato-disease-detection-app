import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router';

export default function Disease() {
  const [searchParams] = useSearchParams();
  const diseaseId = searchParams.get('id') || '1';
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('symptoms');

  // Simulate loading
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 800);
  }, [diseaseId]);

  // Add styles to document only on client side
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const styleSheet = document.createElement("style");
      styleSheet.textContent = `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .action-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0,0,0,0.15) !important;
        }
        
        .related-card:hover {
          border-color: #4caf50 !important;
          background-color: #e8f5e9 !important;
        }

        @media (max-width: 1024px) {
          .main-content {
            grid-template-columns: 1fr !important;
          }
          .main-title {
            font-size: 2rem !important;
          }
        }

        @media (max-width: 768px) {
          .tab-container {
            flex-direction: column;
          }
          .action-buttons {
            grid-template-columns: 1fr !important;
          }
        }
      `;
      document.head.appendChild(styleSheet);
      
      return () => {
        document.head.removeChild(styleSheet);
      };
    }
  }, []);

  // DUMMY DATA - nanti diganti dengan fetch dari API
  const diseaseData = {
    id: diseaseId,
    name: "Bacterial Spot",
    scientificName: "Xanthomonas spp.",
    severity: "Moderate", // Mild, Moderate, Severe
    image: "/daun-tomat.png",
    gallery: ["/daun-tomat.png", "/daun-tomat.png", "/daun-tomat.png"],
    symptoms: "Muncul bercak-bercak kecil berwarna coklat kehitaman pada daun dengan diameter 1-3 mm. Bercak dikelilingi oleh halo kuning yang jelas. Seiring perkembangan penyakit, bercak dapat menyatu membentuk area nekrotik yang lebih besar. Daun yang terinfeksi parah akan menguning, mengering, dan akhirnya gugur prematur. Pada buah, muncul bintik-bintik coklat yang sedikit menonjol dengan tepi putih.",
    causes: "Disebabkan oleh bakteri Xanthomonas spp. yang dapat bertahan hidup di sisa tanaman terinfeksi dan benih. Bakteri menyebar melalui percikan air hujan, alat pertanian yang terkontaminasi, dan kontak langsung antar tanaman. Kondisi lingkungan yang mendukung perkembangan penyakit meliputi kelembaban tinggi (>85%), suhu hangat (24-30°C), dan adanya luka pada tanaman.",
    solutions: [
      "Gunakan benih dan bibit bersertifikat yang bebas penyakit",
      "Terapkan rotasi tanaman dengan tanaman non-solanaceae minimal 2 tahun",
      "Hindari penyiraman dari atas yang membasahi daun, gunakan sistem irigasi tetes",
      "Buang dan musnahkan bagian tanaman yang terinfeksi dengan cara dibakar",
      "Jaga jarak tanam minimal 50-60 cm untuk sirkulasi udara yang baik",
      "Aplikasi bakterisida berbahan tembaga (copper hydroxide) sesuai dosis anjuran",
      "Lakukan sanitasi alat pertanian dengan desinfektan setelah digunakan",
      "Hindari bekerja di lahan saat tanaman basah untuk mencegah penyebaran"
    ],
    economicImpact: "Dapat menyebabkan kerugian hasil panen hingga 30-50% jika tidak ditangani dengan baik. Biaya pengendalian mencapai Rp 2-3 juta per hektar.",
    affectedCrops: ["Tomat", "Cabai", "Paprika", "Terong"],
    relatedDiseases: ["Early Blight", "Late Blight", "Septoria Leaf Spot"]
  };

  const getSeverityColor = (severity) => {
    const colors = {
      Mild: { bg: '#d4edda', text: '#155724', border: '#c3e6cb' },
      Moderate: { bg: '#fff3cd', text: '#856404', border: '#ffeaa7' },
      Severe: { bg: '#f8d7da', text: '#721c24', border: '#f5c6cb' }
    };
    return colors[severity] || colors.Moderate;
  };

  if (isLoading) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.spinner}></div>
        <p style={styles.loadingText}>Memuat informasi penyakit...</p>
      </div>
    );
  }

  return (
    <div style={styles.pageWrapper}>
      {/* Breadcrumb */}
      <div style={styles.breadcrumb}>
        <Link to="/" style={styles.breadcrumbLink}>Home</Link>
        <span style={styles.breadcrumbSeparator}>/</span>
        <Link to="/disease" style={styles.breadcrumbLink}>Disease</Link>
        <span style={styles.breadcrumbSeparator}>/</span>
        <span style={styles.breadcrumbCurrent}>{diseaseData.name}</span>
      </div>

      <div style={styles.container}>
        {/* Hero Section */}
        <div style={styles.heroSection}>
          <div style={styles.heroContent}>
            <div style={styles.titleSection}>
              <h1 style={styles.mainTitle} className="main-title">{diseaseData.name}</h1>
              <p style={styles.scientificName}>{diseaseData.scientificName}</p>
              <div style={{
                ...styles.severityBadge,
                backgroundColor: getSeverityColor(diseaseData.severity).bg,
                color: getSeverityColor(diseaseData.severity).text,
                border: `2px solid ${getSeverityColor(diseaseData.severity).border}`
              }}>
                {diseaseData.severity} Severity
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div style={styles.mainContent} className="main-content">
          {/* Image Gallery */}
          <div style={styles.imageSection}>
            <div style={styles.mainImageContainer}>
              <img 
                src={diseaseData.image} 
                alt={diseaseData.name}
                style={styles.mainImage}
              />
            </div>
            
            {/* Quick Actions */}
            <div style={styles.actionButtons} className="action-buttons">
              <button style={styles.actionButton} className="action-button">
                📥 Download Info
              </button>
              <button style={styles.actionButton} className="action-button">
                🔗 Share
              </button>
              <button style={styles.actionButton} className="action-button">
                🖨️ Print
              </button>
            </div>

            {/* Affected Crops */}
            <div style={styles.affectedCard}>
              <h3 style={styles.affectedTitle}>🌱 Tanaman Terpengaruh</h3>
              <div style={styles.cropTags}>
                {diseaseData.affectedCrops.map((crop, idx) => (
                  <span key={idx} style={styles.cropTag}>{crop}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div style={styles.detailsSection}>
            {/* Tab Navigation */}
            <div style={styles.tabContainer} className="tab-container">
              <button 
                style={{...styles.tab, ...(activeTab === 'symptoms' ? styles.activeTab : {})}}
                onClick={() => setActiveTab('symptoms')}
              >
                🔍 Gejala
              </button>
              <button 
                style={{...styles.tab, ...(activeTab === 'causes' ? styles.activeTab : {})}}
                onClick={() => setActiveTab('causes')}
              >
                ⚠️ Penyebab
              </button>
              <button 
                style={{...styles.tab, ...(activeTab === 'solutions' ? styles.activeTab : {})}}
                onClick={() => setActiveTab('solutions')}
              >
                💡 Solusi
              </button>
            </div>

            {/* Tab Content */}
            <div style={styles.tabContent}>
              {activeTab === 'symptoms' && (
                <div style={styles.contentCard}>
                  <h2 style={styles.contentTitle}>Gejala Penyakit</h2>
                  <p style={styles.contentText}>{diseaseData.symptoms}</p>
                </div>
              )}

              {activeTab === 'causes' && (
                <div style={styles.contentCard}>
                  <h2 style={styles.contentTitle}>Penyebab Penyakit</h2>
                  <p style={styles.contentText}>{diseaseData.causes}</p>
                </div>
              )}

              {activeTab === 'solutions' && (
                <div style={styles.contentCard}>
                  <h2 style={styles.contentTitle}>Cara Pengendalian</h2>
                  <ul style={styles.solutionList}>
                    {diseaseData.solutions.map((solution, idx) => (
                      <li key={idx} style={styles.solutionItem}>
                        <span style={styles.solutionNumber}>{idx + 1}</span>
                        <span style={styles.solutionText}>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Economic Impact Alert */}
            <div style={styles.alertBox}>
              <div style={styles.alertIcon}>💰</div>
              <div>
                <h4 style={styles.alertTitle}>Dampak Ekonomi</h4>
                <p style={styles.alertText}>{diseaseData.economicImpact}</p>
              </div>
            </div>

            {/* Related Diseases */}
            <div style={styles.relatedSection}>
              <h3 style={styles.relatedTitle}>Penyakit Terkait</h3>
              <div style={styles.relatedGrid}>
                {diseaseData.relatedDiseases.map((disease, idx) => (
                  <div key={idx} style={styles.relatedCard} className="related-card">
                    <span style={styles.relatedIcon}>🍃</span>
                    <span style={styles.relatedName}>{disease}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Styles
const styles = {
  pageWrapper: {
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
    paddingBottom: '60px',
  },
  breadcrumb: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '20px 20px 0',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
  },
  breadcrumbLink: {
    color: '#4caf50',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
  breadcrumbSeparator: {
    color: '#999',
  },
  breadcrumbCurrent: {
    color: '#666',
  },
  loadingContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60vh',
    gap: '20px',
  },
  spinner: {
    width: '50px',
    height: '50px',
    border: '4px solid #e0e0e0',
    borderTop: '4px solid #4caf50',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  loadingText: {
    fontSize: '16px',
    color: '#666',
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '20px',
  },
  heroSection: {
    background: 'linear-gradient(135deg, #2d5016 0%, #4caf50 100%)',
    borderRadius: '20px',
    padding: '40px',
    marginBottom: '30px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  },
  heroContent: {
    color: 'white',
  },
  titleSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  mainTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    margin: 0,
    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
  },
  scientificName: {
    fontSize: '1.2rem',
    fontStyle: 'italic',
    opacity: 0.9,
    margin: 0,
  },
  severityBadge: {
    display: 'inline-block',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: 'bold',
    marginTop: '10px',
    alignSelf: 'flex-start',
  },
  mainContent: {
    display: 'grid',
    gridTemplateColumns: '400px 1fr',
    gap: '30px',
  },
  imageSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  mainImageContainer: {
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
    backgroundColor: 'white',
  },
  mainImage: {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    display: 'block',
  },
  actionButtons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
  },
  actionButton: {
    padding: '12px',
    backgroundColor: 'white',
    border: '2px solid #e0e0e0',
    borderRadius: '10px',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s',
    color: '#333',
  },
  affectedCard: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  },
  affectedTitle: {
    margin: '0 0 15px 0',
    fontSize: '16px',
    color: '#2d5016',
    fontWeight: 'bold',
  },
  cropTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  cropTag: {
    backgroundColor: '#e8f5e9',
    color: '#2d5016',
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: '500',
  },
  detailsSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  tabContainer: {
    display: 'flex',
    gap: '10px',
    backgroundColor: 'white',
    padding: '8px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  },
  tab: {
    flex: 1,
    padding: '14px',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '8px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s',
    color: '#666',
  },
  activeTab: {
    backgroundColor: '#4caf50',
    color: 'white',
    boxShadow: '0 4px 12px rgba(76,175,80,0.3)',
  },
  tabContent: {
    minHeight: '300px',
  },
  contentCard: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  },
  contentTitle: {
    fontSize: '1.5rem',
    color: '#2d5016',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  contentText: {
    fontSize: '1.05rem',
    lineHeight: '1.8',
    color: '#444',
    textAlign: 'justify',
  },
  solutionList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  solutionItem: {
    display: 'flex',
    gap: '15px',
    alignItems: 'flex-start',
  },
  solutionNumber: {
    backgroundColor: '#4caf50',
    color: 'white',
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: 'bold',
    flexShrink: 0,
  },
  solutionText: {
    fontSize: '1.05rem',
    lineHeight: '1.7',
    color: '#444',
    flex: 1,
  },
  alertBox: {
    backgroundColor: '#fff3cd',
    border: '2px solid #ffeaa7',
    borderRadius: '12px',
    padding: '20px',
    display: 'flex',
    gap: '15px',
  },
  alertIcon: {
    fontSize: '32px',
  },
  alertTitle: {
    margin: '0 0 8px 0',
    fontSize: '16px',
    color: '#856404',
    fontWeight: 'bold',
  },
  alertText: {
    margin: 0,
    fontSize: '14px',
    color: '#856404',
    lineHeight: '1.6',
  },
  relatedSection: {
    backgroundColor: 'white',
    padding: '25px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  },
  relatedTitle: {
    margin: '0 0 20px 0',
    fontSize: '18px',
    color: '#2d5016',
    fontWeight: 'bold',
  },
  relatedGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '12px',
  },
  relatedCard: {
    backgroundColor: '#f8f9fa',
    padding: '15px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
    transition: 'all 0.3s',
    border: '2px solid transparent',
  },
  relatedIcon: {
    fontSize: '24px',
  },
  relatedName: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#333',
  },
};