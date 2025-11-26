import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router';

export default function Disease() {
  const [searchParams, setSearchParams] = useSearchParams();

  // LABELS sesuai data kalian
  const LABELS = [
    'Bacterial_Spot',
    'Early_Blight',
    'Healthy',
    'Late_Blight',
    'Leaf_Mold',
    'Mosaic_Virus',
    'Septoria_Leaf_Spot',
    'Spider_Mites',
    'Target_Spot',
    'Yellow_Leaf_Curl_Virus'
  ];

  const toDisplayName = (label) =>
    label.replaceAll('_', ' ').replace(/\b\w/g, c => c.toUpperCase());

  // ambil dari URL (contoh: /disease?id=Early_Blight)
  const diseaseIdRaw = searchParams.get('id') || 'Bacterial_Spot';
  const diseaseId = LABELS.includes(diseaseIdRaw) ? diseaseIdRaw : 'Bacterial_Spot';

  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('symptoms');

  // Simulate loading
  useEffect(() => {
    setIsLoading(true);
    const t = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(t);
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
        }
      `;
      document.head.appendChild(styleSheet);
      
      return () => {
        document.head.removeChild(styleSheet);
      };
    }
  }, []);

  // DUMMY DATA (English) -> nanti ganti fetch API
  const DISEASE_INFO = {
    Bacterial_Spot: {
      scientificName: "Xanthomonas spp.",
      severity: "Moderate", // Mild, Moderate, Severe
      image: "/bacterial-spot.jpg",
      symptoms:
        "Small, dark brown to black spots (1–3 mm) appear on leaves, often surrounded by yellow halos. Spots may merge into larger necrotic areas. Severely infected leaves turn yellow, dry out, and drop prematurely. Fruits may show slightly raised brown lesions with pale margins.",
      causes:
        "Caused by Xanthomonas bacteria that survive on infected plant debris and seeds. Spread occurs through rain splash, contaminated tools, and plant-to-plant contact. High humidity (>85%), warm temperatures (24–30°C), and plant wounds favor infection.",
      solutions: [
        "Use certified disease-free seeds and seedlings",
        "Rotate crops with non-solanaceous plants for at least 2 years",
        "Avoid overhead irrigation; use drip irrigation instead",
        "Remove and destroy infected plant parts",
        "Maintain 50–60 cm spacing to improve airflow",
        "Apply copper-based bactericides as recommended",
        "Sanitize tools after use",
        "Avoid working with wet plants to prevent spread"
      ],
      relatedDiseases: ["Early Blight", "Late Blight", "Septoria Leaf Spot"]
    },

    Early_Blight: {
      scientificName: "Alternaria solani",
      severity: "Moderate",
      image: "/early-blight.jpg",
      symptoms:
        "Concentric dark lesions (target-like rings) develop on older leaves, leading to yellowing and early defoliation.",
      causes:
        "A fungal infection favored by warm, humid conditions and poor field sanitation.",
      solutions: [
        "Remove infected leaves",
        "Improve airflow with proper spacing",
        "Apply recommended fungicides"
      ],
      relatedDiseases: ["Late Blight", "Septoria Leaf Spot"]
    },

    Healthy: {
      scientificName: "-",
      severity: "Mild",
      image: "/daun-tomat.png",
      symptoms:
        "No visible disease symptoms detected.",
      causes:
        "The plant appears healthy.",
      solutions: [
        "Maintain balanced nutrition and watering",
        "Continue routine monitoring"
      ],
      relatedDiseases: []
    },

    Late_Blight: {
      scientificName: "Phytophthora infestans",
      severity: "Severe",
      image: "/late-blight.jpg",
      symptoms:
        "Water-soaked lesions rapidly expand on leaves and stems. White mold may appear on the underside under high humidity.",
      causes:
        "An oomycete pathogen spread by wind and rain. It thrives in cool and wet conditions.",
      solutions: [
        "Remove infected plants immediately",
        "Use resistant varieties if available",
        "Apply systemic fungicides early"
      ],
      relatedDiseases: ["Early Blight"]
    },

    Leaf_Mold: {
      scientificName: "Passalora fulva",
      severity: "Moderate",
      image: "/leaf-mold.jpg",
      symptoms:
        "Yellow patches on upper leaf surfaces with olive-green mold underneath.",
      causes:
        "Fungus favored by high humidity and poor ventilation.",
      solutions: [
        "Reduce humidity and improve airflow",
        "Remove infected leaves",
        "Apply fungicides if needed"
      ],
      relatedDiseases: []
    },

    Mosaic_Virus: {
      scientificName: "Tomato mosaic virus (ToMV)",
      severity: "Moderate",
      image: "/mosaic-virus.jpg",
      symptoms:
        "Light and dark green mosaic patterns appear, with leaf distortion and stunted growth.",
      causes:
        "Virus spread through contact, tools, and infected seeds.",
      solutions: [
        "Remove infected plants",
        "Disinfect tools",
        "Use virus-free seeds"
      ],
      relatedDiseases: []
    },

    Septoria_Leaf_Spot: {
      scientificName: "Septoria lycopersici",
      severity: "Moderate",
      image: "/septoria-leaf-spot.jpg",
      symptoms:
        "Small circular spots with gray centers and dark edges, starting from lower leaves.",
      causes:
        "Fungal disease spread by splashing water and humid weather.",
      solutions: [
        "Remove infected leaves",
        "Avoid overhead watering",
        "Apply protective fungicides"
      ],
      relatedDiseases: ["Early Blight"]
    },

    Spider_Mites: {
      scientificName: "Tetranychus urticae",
      severity: "Moderate",
      image: "/spider-mites.jpg",
      symptoms:
        "Yellow stippling on leaves with fine webbing underneath. Leaves can bronze and dry.",
      causes:
        "Mite infestation favored by hot, dry environments.",
      solutions: [
        "Increase humidity if possible",
        "Use acaricides when needed",
        "Introduce natural predators"
      ],
      relatedDiseases: []
    },

    Target_Spot: {
      scientificName: "Corynespora cassiicola",
      severity: "Moderate",
      image: "/target-spot.jpg",
      symptoms:
        "Brown lesions with concentric rings on leaves and stems.",
      causes:
        "Fungal pathogen spread by wind/rain, thriving in humid conditions.",
      solutions: [
        "Remove infected leaves",
        "Improve airflow",
        "Apply fungicides"
      ],
      relatedDiseases: []
    },

    Yellow_Leaf_Curl_Virus: {
      scientificName: "Tomato yellow leaf curl virus (TYLCV)",
      severity: "Severe",
      image: "/yellow-leaf-curl-virus.jpg",
      symptoms:
        "Leaves curl upward, become yellow and thickened, and plants are stunted.",
      causes:
        "Virus transmitted primarily by whiteflies.",
      solutions: [
        "Control whiteflies",
        "Remove infected plants",
        "Use resistant varieties"
      ],
      relatedDiseases: []
    }
  };

  const diseaseData = {
    id: diseaseId,
    name: toDisplayName(diseaseId),
    ...DISEASE_INFO[diseaseId]
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
        <p style={styles.loadingText}>Loading disease information...</p>
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
              <h1 style={styles.mainTitle} className="main-title">
                {diseaseData.name}
              </h1>
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
          {/* Image Section */}
          <div style={styles.imageSection}>
            <div style={styles.mainImageContainer}>
              <img 
                src={diseaseData.image} 
                alt={diseaseData.name}
                style={styles.mainImage}
              />
            </div>
          </div>

          {/* Details Section */}
          <div style={styles.detailsSection}>
            {/* Disease Picker */}
            <div style={styles.pickerCard}>
              <label style={styles.pickerLabel}>Choose Disease</label>
              <select
                value={diseaseId}
                onChange={(e) => {
                  const next = e.target.value;
                  setSearchParams({ id: next });
                  setActiveTab('symptoms');
                }}
                style={styles.pickerSelect}
              >
                {LABELS.map((lab) => (
                  <option key={lab} value={lab}>
                    {toDisplayName(lab)}
                  </option>
                ))}
              </select>
            </div>

            {/* Tab Navigation */}
            <div style={styles.tabContainer} className="tab-container">
              <button 
                style={{...styles.tab, ...(activeTab === 'symptoms' ? styles.activeTab : {})}}
                onClick={() => setActiveTab('symptoms')}
              >
                🔍 Symptoms
              </button>
              <button 
                style={{...styles.tab, ...(activeTab === 'causes' ? styles.activeTab : {})}}
                onClick={() => setActiveTab('causes')}
              >
                ⚠️ Causes
              </button>
              <button 
                style={{...styles.tab, ...(activeTab === 'solutions' ? styles.activeTab : {})}}
                onClick={() => setActiveTab('solutions')}
              >
                💡 Solutions
              </button>
            </div>

            {/* Tab Content */}
            <div style={styles.tabContent}>
              {activeTab === 'symptoms' && (
                <div style={styles.contentCard}>
                  <h2 style={styles.contentTitle}>Disease Symptoms</h2>
                  <p style={styles.contentText}>{diseaseData.symptoms}</p>
                </div>
              )}

              {activeTab === 'causes' && (
                <div style={styles.contentCard}>
                  <h2 style={styles.contentTitle}>Disease Causes</h2>
                  <p style={styles.contentText}>{diseaseData.causes}</p>
                </div>
              )}

              {activeTab === 'solutions' && (
                <div style={styles.contentCard}>
                  <h2 style={styles.contentTitle}>Control & Treatment</h2>
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

  // Picker styles
  pickerCard: {
    backgroundColor: 'white',
    padding: '16px 18px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  pickerLabel: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#2d5016',
    minWidth: '120px',
  },
  pickerSelect: {
    flex: 1,
    border: '2px solid #e0e0e0',
    borderRadius: '8px',
    padding: '10px 12px',
    fontSize: '14px',
    outline: 'none',
    cursor: 'pointer',
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
