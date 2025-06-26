import { 
  Syringe, 
  Stethoscope, 
  Pill, 
  Activity, 
  Scissors, 
  Heart, 
  Wind 
} from 'lucide-react';

export const productData = [
  {
    id: 'infusion-therapy',
    name: 'Infusion Therapy',
    description: 'Advanced infusion devices for precise medication and fluid delivery',
    icon: Syringe,
    subcategories: [
      {
        id: 'iv-cannulas',
        name: 'IV Cannulas',
        products: [
          {
            id: 'ecocann-wi',
            name: 'EcoCann WI+ IV Cannula',
            description: 'Ultra-sharp IV cannula with wings and injection port for pain-free venous access',
            image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Ultra-sharp Japanese needle',
              'FEP radiopaque catheter',
              'Flexible wide wings',
              'Injection port included'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'safety-cannula',
            name: 'Safety IV Cannula',
            description: 'Advanced safety mechanism to prevent needlestick injuries',
            image: 'https://images.pexels.com/photos/6823566/pexels-photo-6823566.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Automatic safety mechanism',
              'Visual confirmation',
              'Ergonomic design',
              'Multiple size options'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'pediatric-cannula',
            name: 'Pediatric IV Cannula',
            description: 'Specially designed for pediatric patients with gentle insertion',
            image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Smaller gauge options',
              'Gentle insertion',
              'Colorful design',
              'Safety features'
            ],
            certifications: ['CE', 'ISO 13485']
          }
        ]
      },
      {
        id: 'infusion-sets',
        name: 'Infusion Sets',
        products: [
          {
            id: 'ecovenn-set',
            name: 'EcoVenn Infusion Set',
            description: 'High-quality IV infusion set with precise flow control',
            image: 'https://images.pexels.com/photos/4386323/pexels-photo-4386323.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Sharp spike design',
              'Transparent drip chamber',
              'Kink-resistant tubing',
              'Roller clamp control'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'micro-infusion',
            name: 'Micro Infusion Set',
            description: 'Precision infusion set for controlled medication delivery',
            image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Micro-drop chamber',
              '60 drops/ml accuracy',
              'Latex-free materials',
              'Sterile packaging'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'extension-set',
            name: 'Extension Set',
            description: 'Flexible extension tubing for extended reach applications',
            image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Various lengths available',
              'Luer lock connections',
              'Flexible tubing',
              'Clear visibility'
            ],
            certifications: ['CE', 'ISO 13485']
          }
        ]
      },
      {
        id: 'stopcocks',
        name: 'Stopcocks & Valves',
        products: [
          {
            id: 'three-way-stopcock',
            name: 'Three-Way Stopcock',
            description: 'Precision flow control for multiple infusion lines',
            image: 'https://images.pexels.com/photos/6823569/pexels-photo-6823569.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              '360-degree rotation',
              'Leak-proof design',
              'Color-coded handles',
              'Universal compatibility'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'four-way-stopcock',
            name: 'Four-Way Stopcock',
            description: 'Advanced multi-port flow control system',
            image: 'https://images.pexels.com/photos/4386323/pexels-photo-4386323.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Four-port design',
              'Smooth operation',
              'High-pressure rating',
              'Durable construction'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'manifold-stopcock',
            name: 'Manifold Stopcock',
            description: 'Multiple port manifold for complex infusion setups',
            image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Multiple ports',
              'Individual control',
              'Clear labeling',
              'Easy cleaning'
            ],
            certifications: ['CE', 'ISO 13485']
          }
        ]
      },
      {
        id: 'pressure-bags',
        name: 'Pressure Infusion',
        products: [
          {
            id: 'pressure-bag-500',
            name: 'Pressure Infusion Bag 500ml',
            description: 'Pressure bag for rapid fluid infusion',
            image: 'https://images.pexels.com/photos/6823566/pexels-photo-6823566.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              '500ml capacity',
              'Pressure gauge',
              'Safety valve',
              'Reusable design'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'pressure-bag-1000',
            name: 'Pressure Infusion Bag 1000ml',
            description: 'Large capacity pressure bag for extended use',
            image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              '1000ml capacity',
              'Digital pressure display',
              'Quick-release valve',
              'Latex-free materials'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'manual-pump',
            name: 'Manual Pressure Pump',
            description: 'Hand-operated pressure pump for controlled infusion',
            image: 'https://images.pexels.com/photos/4386323/pexels-photo-4386323.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Manual operation',
              'Pressure control',
              'Compact design',
              'Easy maintenance'
            ],
            certifications: ['CE', 'ISO 13485']
          }
        ]
      }
    ]
  },
  {
    id: 'anesthesia',
    name: 'Anesthesia & Pain Management',
    description: 'Comprehensive anesthesia delivery and pain management solutions',
    icon: Stethoscope,
    subcategories: [
      {
        id: 'spinal-needles',
        name: 'Spinal Needles',
        products: [
          {
            id: 'quincke-spinal',
            name: 'Quincke Spinal Needle',
            description: 'Precision spinal needle for subarachnoid anesthesia',
            image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Ultra-sharp tip',
              'Transparent hub',
              'Ergonomic design',
              'Multiple sizes'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'pencil-point',
            name: 'Pencil Point Spinal Needle',
            description: 'Atraumatic pencil point design for reduced complications',
            image: 'https://images.pexels.com/photos/6823566/pexels-photo-6823566.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Atraumatic tip',
              'Reduced headache risk',
              'Smooth insertion',
              'Color-coded hub'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'pediatric-spinal',
            name: 'Pediatric Spinal Needle',
            description: 'Specialized spinal needles for pediatric patients',
            image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Smaller gauge options',
              'Gentle design',
              'Precise control',
              'Safety features'
            ],
            certifications: ['CE', 'ISO 13485']
          }
        ]
      },
      {
        id: 'epidural-kits',
        name: 'Epidural Kits',
        products: [
          {
            id: 'epidural-kit-standard',
            name: 'Standard Epidural Kit',
            description: 'Complete epidural kit for continuous anesthesia',
            image: 'https://images.pexels.com/photos/4386323/pexels-photo-4386323.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Tuohy needle',
              'Radiopaque catheter',
              'Filter included',
              'Complete kit'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'epidural-kit-advanced',
            name: 'Advanced Epidural Kit',
            description: 'Premium epidural kit with enhanced features',
            image: 'https://images.pexels.com/photos/6823569/pexels-photo-6823569.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Advanced needle design',
              'Multi-orifice catheter',
              'Bacterial filter',
              'Connector system'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'epidural-catheter',
            name: 'Epidural Catheter',
            description: 'Flexible epidural catheter for pain management',
            image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Flexible polyurethane',
              'Radiopaque markings',
              'Smooth surface',
              'Various lengths'
            ],
            certifications: ['CE', 'ISO 13485']
          }
        ]
      },
      {
        id: 'nerve-blocks',
        name: 'Nerve Block Needles',
        products: [
          {
            id: 'nerve-block-50mm',
            name: 'Nerve Block Needle 50mm',
            description: 'Precision needle for peripheral nerve blocks',
            image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              '50mm length',
              'Sharp bevel tip',
              'Ergonomic grip',
              'Depth markings'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'nerve-block-100mm',
            name: 'Nerve Block Needle 100mm',
            description: 'Extended length needle for deep nerve blocks',
            image: 'https://images.pexels.com/photos/4386323/pexels-photo-4386323.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              '100mm length',
              'Reinforced shaft',
              'Clear hub',
              'Precise control'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'stimulator-needle',
            name: 'Nerve Stimulator Needle',
            description: 'Insulated needle for nerve stimulator use',
            image: 'https://images.pexels.com/photos/6823566/pexels-photo-6823566.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Insulated shaft',
              'Connector included',
              'Non-slip grip',
              'Various gauges'
            ],
            certifications: ['CE', 'ISO 13485']
          }
        ]
      },
      {
        id: 'masks-airways',
        name: 'Masks & Airways',
        products: [
          {
            id: 'anesthesia-mask',
            name: 'Anesthesia Face Mask',
            description: 'Comfortable face mask for anesthesia delivery',
            image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Soft silicone seal',
              'Multiple sizes',
              'Clear body',
              'Secure fit'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'laryngeal-mask',
            name: 'Laryngeal Mask Airway',
            description: 'Supraglottic airway device for secure ventilation',
            image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Inflatable cuff',
              'Secure airway',
              'Easy insertion',
              'Reusable option'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'endotracheal-tube',
            name: 'Endotracheal Tube',
            description: 'High-quality endotracheal tube for intubation',
            image: 'https://images.pexels.com/photos/4386323/pexels-photo-4386323.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Soft PVC material',
              'Inflatable cuff',
              'Radiopaque line',
              'Murphy eye'
            ],
            certifications: ['CE', 'ISO 13485']
          }
        ]
      }
    ]
  },
  {
    id: 'gastroenterology',
    name: 'Gastroenterology',
    description: 'Specialized devices for gastrointestinal procedures and enteral feeding',
    icon: Pill,
    subcategories: [
      {
        id: 'feeding-tubes',
        name: 'Feeding Tubes',
        products: [
          {
            id: 'peg-tube',
            name: 'PEG Feeding Tube',
            description: 'Percutaneous endoscopic gastrostomy tube for long-term feeding',
            image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Silicone construction',
              'Balloon retention',
              'Multiple sizes',
              'Easy maintenance'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'nasogastric-tube',
            name: 'Nasogastric Tube',
            description: 'Flexible tube for gastric decompression and feeding',
            image: 'https://images.pexels.com/photos/6823566/pexels-photo-6823566.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Soft PVC material',
              'Radiopaque stripe',
              'Multiple eyes',
              'Depth markings'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'jejunal-tube',
            name: 'Jejunal Feeding Tube',
            description: 'Post-pyloric feeding tube for jejunal nutrition',
            image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Weighted tip',
              'Flexible design',
              'Precise placement',
              'Biocompatible'
            ],
            certifications: ['CE', 'ISO 13485']
          }
        ]
      },
      {
        id: 'endoscopy',
        name: 'Endoscopy Accessories',
        products: [
          {
            id: 'biopsy-forceps',
            name: 'Endoscopic Biopsy Forceps',
            description: 'Precision forceps for tissue sampling',
            image: 'https://images.pexels.com/photos/4386323/pexels-photo-4386323.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Sharp cutting edges',
              'Flexible shaft',
              'Ergonomic handle',
              'Reusable design'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'polypectomy-snare',
            name: 'Polypectomy Snare',
            description: 'Electrosurgical snare for polyp removal',
            image: 'https://images.pexels.com/photos/6823569/pexels-photo-6823569.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Monofilament wire',
              'Insulated shaft',
              'Various loop sizes',
              'Safety features'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'injection-needle',
            name: 'Endoscopic Injection Needle',
            description: 'Retractable needle for endoscopic injections',
            image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Retractable design',
              'Precise control',
              'Multiple gauges',
              'Safety mechanism'
            ],
            certifications: ['CE', 'ISO 13485']
          }
        ]
      },
      {
        id: 'drainage-tubes',
        name: 'Drainage Tubes',
        products: [
          {
            id: 'gastrostomy-tube',
            name: 'Gastrostomy Drainage Tube',
            description: 'Drainage tube for gastric decompression',
            image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Large bore design',
              'Multiple drainage holes',
              'Flexible material',
              'Secure fixation'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'biliary-drain',
            name: 'Biliary Drainage Catheter',
            description: 'Specialized catheter for biliary drainage',
            image: 'https://images.pexels.com/photos/4386323/pexels-photo-4386323.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Pigtail configuration',
              'Radiopaque markers',
              'Smooth surface',
              'Kink resistance'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'peritoneal-drain',
            name: 'Peritoneal Drainage Catheter',
            description: 'Catheter for peritoneal fluid drainage',
            image: 'https://images.pexels.com/photos/6823566/pexels-photo-6823566.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Multi-hole design',
              'Soft silicone',
              'Trocar insertion',
              'Secure anchoring'
            ],
            certifications: ['CE', 'ISO 13485']
          }
        ]
      },
      {
        id: 'stents-dilators',
        name: 'Stents & Dilators',
        products: [
          {
            id: 'esophageal-stent',
            name: 'Esophageal Stent',
            description: 'Self-expanding stent for esophageal strictures',
            image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Self-expanding design',
              'Biocompatible coating',
              'Precise deployment',
              'Radiopaque markers'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'biliary-stent',
            name: 'Biliary Stent',
            description: 'Plastic stent for biliary duct drainage',
            image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Double pigtail design',
              'Easy removal',
              'Various lengths',
              'Smooth passage'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'balloon-dilator',
            name: 'Balloon Dilator',
            description: 'Controlled radial expansion balloon dilator',
            image: 'https://images.pexels.com/photos/4386323/pexels-photo-4386323.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Controlled expansion',
              'Pressure gauge',
              'Various diameters',
              'Gradual dilation'
            ],
            certifications: ['CE', 'ISO 13485']
          }
        ]
      }
    ]
  },
  {
    id: 'urology',
    name: 'Urology',
    description: 'Comprehensive urological devices for diagnosis and treatment',
    icon: Activity,
    subcategories: [
      {
        id: 'catheters',
        name: 'Urinary Catheters',
        products: [
          {
            id: 'foley-catheter',
            name: 'Foley Catheter',
            description: 'Silicone Foley catheter for urinary drainage',
            image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              '100% silicone',
              'Symmetrical balloon',
              'Smooth surface',
              'Biocompatible'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'intermittent-catheter',
            name: 'Intermittent Catheter',
            description: 'Single-use catheter for intermittent catheterization',
            image: 'https://images.pexels.com/photos/6823566/pexels-photo-6823566.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Hydrophilic coating',
              'Sterile packaging',
              'Easy handling',
              'Reduced trauma'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'three-way-catheter',
            name: 'Three-Way Catheter',
            description: 'Triple lumen catheter for continuous irrigation',
            image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Three separate lumens',
              'Continuous irrigation',
              'Large drainage',
              'Clear identification'
            ],
            certifications: ['CE', 'ISO 13485']
          }
        ]
      },
      {
        id: 'stents',
        name: 'Ureteral Stents',
        products: [
          {
            id: 'double-j-stent',
            name: 'Double-J Ureteral Stent',
            description: 'Polyurethane ureteral stent with double-J configuration',
            image: 'https://images.pexels.com/photos/4386323/pexels-photo-4386323.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Double-J design',
              'Polyurethane material',
              'Radiopaque markers',
              'Anti-migration'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'hydrogel-stent',
            name: 'Hydrogel Coated Stent',
            description: 'Biocompatible stent with hydrogel coating',
            image: 'https://images.pexels.com/photos/6823569/pexels-photo-6823569.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Hydrogel coating',
              'Reduced encrustation',
              'Comfort enhanced',
              'Extended duration'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'metallic-stent',
            name: 'Metallic Ureteral Stent',
            description: 'Self-expanding metallic stent for complex cases',
            image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Self-expanding',
              'High radial force',
              'MRI compatible',
              'Long-term use'
            ],
            certifications: ['CE', 'ISO 13485']
          }
        ]
      },
      {
        id: 'drainage',
        name: 'Drainage Systems',
        products: [
          {
            id: 'nephrostomy-tube',
            name: 'Nephrostomy Drainage Tube',
            description: 'Percutaneous nephrostomy tube for renal drainage',
            image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Pigtail retention',
              'Radiopaque line',
              'Multiple sizes',
              'Secure fixation'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'suprapubic-catheter',
            name: 'Suprapubic Catheter',
            description: 'Catheter for suprapubic bladder drainage',
            image: 'https://images.pexels.com/photos/4386323/pexels-photo-4386323.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Balloon retention',
              'Soft silicone',
              'Trocar insertion',
              'Patient comfort'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'urostomy-bag',
            name: 'Urostomy Drainage Bag',
            description: 'Collection bag for urinary diversions',
            image: 'https://images.pexels.com/photos/6823566/pexels-photo-6823566.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Large capacity',
              'Anti-reflux valve',
              'Secure adhesion',
              'Odor barrier'
            ],
            certifications: ['CE', 'ISO 13485']
          }
        ]
      },
      {
        id: 'biopsy',
        name: 'Biopsy Devices',
        products: [
          {
            id: 'prostate-biopsy',
            name: 'Prostate Biopsy Gun',
            description: 'Spring-loaded biopsy gun for prostate sampling',
            image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Spring-loaded mechanism',
              'Precise sampling',
              'Ergonomic design',
              'Safety features'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'renal-biopsy',
            name: 'Renal Biopsy Needle',
            description: 'Core biopsy needle for renal tissue sampling',
            image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Core sampling',
              'Sharp cutting edge',
              'Depth control',
              'Minimal trauma'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'bladder-biopsy',
            name: 'Bladder Biopsy Forceps',
            description: 'Flexible forceps for cystoscopic biopsy',
            image: 'https://images.pexels.com/photos/4386323/pexels-photo-4386323.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Flexible shaft',
              'Sharp cups',
              'Cystoscope compatible',
              'Precise control'
            ],
            certifications: ['CE', 'ISO 13485']
          }
        ]
      }
    ]
  },
  {
    id: 'surgery',
    name: 'Surgery & Wound Care',
    description: 'Advanced surgical instruments and wound management solutions',
    icon: Scissors,
    subcategories: [
      {
        id: 'drainage-systems',
        name: 'Wound Drainage',
        products: [
          {
            id: 'jackson-pratt',
            name: 'Jackson-Pratt Drain',
            description: 'Closed suction wound drainage system',
            image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Closed suction system',
              'Flexible tubing',
              'Reservoir capacity',
              'Easy emptying'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'blake-drain',
            name: 'Blake Silicone Drain',
            description: 'Fluted silicone drain for effective drainage',
            image: 'https://images.pexels.com/photos/6823566/pexels-photo-6823566.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Fluted design',
              '100% silicone',
              'Radiopaque stripe',
              'Gentle removal'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'hemovac-drain',
            name: 'Hemovac Drainage System',
            description: 'High-vacuum drainage system for surgical sites',
            image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'High vacuum suction',
              'Large capacity',
              'Clear reservoir',
              'Pressure indicator'
            ],
            certifications: ['CE', 'ISO 13485']
          }
        ]
      },
      {
        id: 'suction-devices',
        name: 'Suction Devices',
        products: [
          {
            id: 'yankauer-suction',
            name: 'Yankauer Suction Tip',
            description: 'Rigid suction tip for surgical procedures',
            image: 'https://images.pexels.com/photos/4386323/pexels-photo-4386323.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Rigid construction',
              'Thumb control',
              'Atraumatic tip',
              'Easy cleaning'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'poole-suction',
            name: 'Poole Suction Tip',
            description: 'Abdominal suction tip with inner stylet',
            image: 'https://images.pexels.com/photos/6823569/pexels-photo-6823569.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Inner stylet',
              'Large capacity',
              'Prevents clogging',
              'Abdominal use'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'frazier-suction',
            name: 'Frazier Suction Tip',
            description: 'Fine suction tip for delicate procedures',
            image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Fine tip design',
              'Thumb control',
              'Delicate procedures',
              'Precise suction'
            ],
            certifications: ['CE', 'ISO 13485']
          }
        ]
      },
      {
        id: 'surgical-instruments',
        name: 'Surgical Instruments',
        products: [
          {
            id: 'surgical-scissors',
            name: 'Surgical Scissors',
            description: 'High-quality stainless steel surgical scissors',
            image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Stainless steel',
              'Sharp cutting edges',
              'Ergonomic handles',
              'Various sizes'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'surgical-forceps',
            name: 'Surgical Forceps',
            description: 'Precision surgical forceps for tissue handling',
            image: 'https://images.pexels.com/photos/4386323/pexels-photo-4386323.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Precision grip',
              'Tissue-friendly',
              'Durable construction',
              'Multiple patterns'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'surgical-clamps',
            name: 'Hemostatic Clamps',
            description: 'Surgical clamps for hemostasis control',
            image: 'https://images.pexels.com/photos/6823566/pexels-photo-6823566.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Secure clamping',
              'Ratchet mechanism',
              'Curved and straight',
              'Various sizes'
            ],
            certifications: ['CE', 'ISO 13485']
          }
        ]
      },
      {
        id: 'wound-care',
        name: 'Wound Care Products',
        products: [
          {
            id: 'wound-dressing',
            name: 'Advanced Wound Dressing',
            description: 'Sterile wound dressing for optimal healing',
            image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Sterile packaging',
              'Absorbent pad',
              'Adhesive border',
              'Waterproof backing'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'surgical-tape',
            name: 'Medical Surgical Tape',
            description: 'Hypoallergenic surgical tape for secure fixation',
            image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Hypoallergenic',
              'Strong adhesion',
              'Easy removal',
              'Various widths'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'wound-irrigation',
            name: 'Wound Irrigation Kit',
            description: 'Sterile irrigation kit for wound cleaning',
            image: 'https://images.pexels.com/photos/4386323/pexels-photo-4386323.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Sterile solution',
              'Pressure syringe',
              'Splash shield',
              'Complete kit'
            ],
            certifications: ['CE', 'ISO 13485']
          }
        ]
      }
    ]
  },
  {
    id: 'central-venous',
    name: 'Central Venous Access',
    description: 'Advanced central venous catheters for critical care applications',
    icon: Heart,
    subcategories: [
      {
        id: 'central-catheters',
        name: 'Central Catheters',
        products: [
          {
            id: 'triple-lumen-cvc',
            name: 'Triple Lumen CVC',
            description: 'Multi-lumen central venous catheter for multiple therapies',
            image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Three separate lumens',
              'Polyurethane construction',
              'Radiopaque markers',
              'Suture wings'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'single-lumen-cvc',
            name: 'Single Lumen CVC',
            description: 'Single lumen central catheter for high-flow applications',
            image: 'https://images.pexels.com/photos/6823566/pexels-photo-6823566.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Large bore lumen',
              'Soft tip design',
              'Easy insertion',
              'Secure fixation'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'double-lumen-cvc',
            name: 'Double Lumen CVC',
            description: 'Dual lumen catheter for simultaneous treatments',
            image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Two independent lumens',
              'Color-coded hubs',
              'Antimicrobial coating',
              'Kink resistance'
            ],
            certifications: ['CE', 'ISO 13485']
          }
        ]
      },
      {
        id: 'dialysis-catheters',
        name: 'Dialysis Catheters',
        products: [
          {
            id: 'acute-dialysis',
            name: 'Acute Dialysis Catheter',
            description: 'Temporary dialysis catheter for acute care',
            image: 'https://images.pexels.com/photos/4386323/pexels-photo-4386323.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'High flow rates',
              'Staggered tip design',
              'Easy insertion',
              'Short-term use'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'chronic-dialysis',
            name: 'Chronic Dialysis Catheter',
            description: 'Long-term tunneled dialysis catheter',
            image: 'https://images.pexels.com/photos/6823569/pexels-photo-6823569.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Tunneled design',
              'Dacron cuff',
              'Long-term use',
              'Infection resistant'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'pediatric-dialysis',
            name: 'Pediatric Dialysis Catheter',
            description: 'Specialized dialysis catheter for pediatric patients',
            image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Smaller size',
              'Gentle materials',
              'Age-appropriate design',
              'Safety features'
            ],
            certifications: ['CE', 'ISO 13485']
          }
        ]
      },
      {
        id: 'picc-catheters',
        name: 'PICC Catheters',
        products: [
          {
            id: 'single-lumen-picc',
            name: 'Single Lumen PICC',
            description: 'Peripherally inserted central catheter - single lumen',
            image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Peripheral insertion',
              'Central placement',
              'Flexible silicone',
              'Easy maintenance'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'dual-lumen-picc',
            name: 'Dual Lumen PICC',
            description: 'Two-lumen PICC for multiple therapies',
            image: 'https://images.pexels.com/photos/4386323/pexels-photo-4386323.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Two independent lumens',
              'Simultaneous therapy',
              'Reduced complications',
              'Long-term use'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'power-picc',
            name: 'Power PICC',
            description: 'High-pressure PICC for power injection',
            image: 'https://images.pexels.com/photos/6823566/pexels-photo-6823566.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'High pressure rating',
              'Power injection capable',
              'Reinforced construction',
              'CT compatible'
            ],
            certifications: ['CE', 'ISO 13485']
          }
        ]
      },
      {
        id: 'insertion-kits',
        name: 'Insertion Kits',
        products: [
          {
            id: 'cvc-insertion-kit',
            name: 'CVC Insertion Kit',
            description: 'Complete kit for central venous catheterization',
            image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Complete sterile kit',
              'Ultrasound cover',
              'Guidewire included',
              'Dilator set'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'picc-insertion-kit',
            name: 'PICC Insertion Kit',
            description: 'Sterile kit for PICC line insertion',
            image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Sterile components',
              'Measuring tape',
              'Introducer system',
              'Securing device'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'ultrasound-kit',
            name: 'Ultrasound Guidance Kit',
            description: 'Sterile ultrasound accessories for guided insertion',
            image: 'https://images.pexels.com/photos/4386323/pexels-photo-4386323.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Sterile probe cover',
              'Ultrasound gel',
              'Complete sterility',
              'Easy application'
            ],
            certifications: ['CE', 'ISO 13485']
          }
        ]
      }
    ]
  },
  {
    id: 'respiratory',
    name: 'Respiratory Care',
    description: 'Advanced respiratory support devices and airway management solutions',
    icon: Wind,
    subcategories: [
      {
        id: 'oxygen-therapy',
        name: 'Oxygen Therapy',
        products: [
          {
            id: 'nasal-cannula',
            name: 'Nasal Cannula',
            description: 'Comfortable nasal cannula for oxygen delivery',
            image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Soft nasal prongs',
              'Lightweight design',
              'Adjustable headband',
              'Various sizes'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'oxygen-mask',
            name: 'Oxygen Face Mask',
            description: 'High-concentration oxygen delivery mask',
            image: 'https://images.pexels.com/photos/6823566/pexels-photo-6823566.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'High oxygen concentration',
              'Comfortable fit',
              'Clear plastic',
              'Elastic strap'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'venturi-mask',
            name: 'Venturi Mask',
            description: 'Precise oxygen concentration delivery system',
            image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Precise FiO2 control',
              'Color-coded valves',
              'Consistent delivery',
              'Multiple concentrations'
            ],
            certifications: ['CE', 'ISO 13485']
          }
        ]
      },
      {
        id: 'ventilation',
        name: 'Ventilation Circuits',
        products: [
          {
            id: 'breathing-circuit',
            name: 'Breathing Circuit',
            description: 'Disposable breathing circuit for mechanical ventilation',
            image: 'https://images.pexels.com/photos/4386323/pexels-photo-4386323.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Disposable design',
              'Low compliance',
              'Bacterial filter',
              'Complete system'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'cpap-circuit',
            name: 'CPAP Circuit',
            description: 'Continuous positive airway pressure circuit',
            image: 'https://images.pexels.com/photos/6823569/pexels-photo-6823569.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Heated tubing',
              'Pressure monitoring',
              'Leak compensation',
              'Patient comfort'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'bipap-circuit',
            name: 'BiPAP Circuit',
            description: 'Bilevel positive airway pressure circuit',
            image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Dual pressure levels',
              'Spontaneous breathing',
              'Comfort features',
              'Easy setup'
            ],
            certifications: ['CE', 'ISO 13485']
          }
        ]
      },
      {
        id: 'airway-management',
        name: 'Airway Management',
        products: [
          {
            id: 'oropharyngeal-airway',
            name: 'Oropharyngeal Airway',
            description: 'Oral airway for maintaining airway patency',
            image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Anatomical design',
              'Color-coded sizes',
              'Smooth surface',
              'Easy insertion'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'nasopharyngeal-airway',
            name: 'Nasopharyngeal Airway',
            description: 'Nasal airway trumpet for airway management',
            image: 'https://images.pexels.com/photos/4386323/pexels-photo-4386323.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Soft silicone',
              'Beveled tip',
              'Safety flange',
              'Multiple sizes'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'king-airway',
            name: 'King LT Airway',
            description: 'Supraglottic airway device for emergency use',
            image: 'https://images.pexels.com/photos/6823566/pexels-photo-6823566.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Dual cuff design',
              'Easy insertion',
              'Secure ventilation',
              'Emergency use'
            ],
            certifications: ['CE', 'ISO 13485']
          }
        ]
      },
      {
        id: 'nebulizers',
        name: 'Nebulizers & Inhalers',
        products: [
          {
            id: 'jet-nebulizer',
            name: 'Jet Nebulizer',
            description: 'Pneumatic nebulizer for medication delivery',
            image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Pneumatic operation',
              'Fine particle size',
              'Efficient delivery',
              'Easy cleaning'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'ultrasonic-nebulizer',
            name: 'Ultrasonic Nebulizer',
            description: 'Ultrasonic nebulizer for precise medication delivery',
            image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Ultrasonic technology',
              'Consistent output',
              'Quiet operation',
              'Portable design'
            ],
            certifications: ['CE', 'ISO 13485']
          },
          {
            id: 'mesh-nebulizer',
            name: 'Mesh Nebulizer',
            description: 'Vibrating mesh nebulizer for efficient drug delivery',
            image: 'https://images.pexels.com/photos/4386323/pexels-photo-4386323.jpeg?auto=compress&cs=tinysrgb&w=600',
            features: [
              'Vibrating mesh',
              'High efficiency',
              'Minimal residue',
              'Silent operation'
            ],
            certifications: ['CE', 'ISO 13485']
          }
        ]
      }
    ]
  }
];