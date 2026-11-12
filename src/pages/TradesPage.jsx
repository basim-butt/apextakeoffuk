import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function TradesPage() {
  const [selectedGroup, setSelectedGroup] = useState('all')

  const tradeGroups = [
    {
      id: 'groundworks',
      groupCode: 'NRM2 Group 1 & CESMM4',
      name: 'Groundworks, Civils & Drainage',
      icon: '🚜',
      units: ['m³ (Bulk Excavation & Fill)', 'm² (Geotextiles & Sub-base)', 'm (Drainage Runs & Trenches)', 'nr (Manholes & Piles)'],
      description: 'Comprehensive earthworks, site clearance, substructure excavations, pile caps, trench fill, retaining structures, and adoptable surface water and foul drainage networks.',
      items: [
        'Topsoil strip, site remediation, reduced level cut and fill volume balances (m³)',
        'Contiguous and secant bored pile walls, sheet piling, and King Post retaining systems',
        'Continuous reinforced concrete strip footings, pad foundations, and ground beams',
        'Stormwater attenuation tanks (attenuation crates, hydro-brakes, flow control chambers)',
        'Foul and surface water drainage: vitrified clay, PVC-u, twinwall, and concrete pipework',
        'Precast concrete manholes, gullies, inspection chambers, and interceptors (nr)',
      ],
    },
    {
      id: 'rc-frame',
      groupCode: 'NRM2 Group 2',
      name: 'Substructure & In-situ Concrete Frames',
      icon: '🧱',
      units: ['m³ (Ready-Mix Concrete Volume)', 't (High-Yield Rebar Tonnage)', 'm² (Formwork Contact Area)', 'm² (Power-Floated Slabs)'],
      description: 'Precision measurement of basement substructures, multi-storey reinforced concrete frames, post-tensioned decks, and core shear walls.',
      items: [
        'In-situ concrete to ground bearing slabs, suspended slabs, and basement retaining walls (m³)',
        'High-yield deformed steel reinforcing bars (BS 4449 Grade B500B/C, 8mm to 40mm) quantified in tonnes (t)',
        'Formwork surface contact area (m²): soffits, slab edges, column sides, and beam casings',
        'Fabric reinforcement (A142, A193, A252, A393 mesh) with lap allowances',
        'Concrete pumping allowances, power floating, curing membranes, and saw-cut movement joints',
        'Precast concrete stairs, landings, and edge beam assemblies',
      ],
    },
    {
      id: 'steelwork',
      groupCode: 'NRM2 Group 3',
      name: 'Structural Steelwork & Metalwork',
      icon: '⚙️',
      units: ['t (Fabricated Steel Tonnage)', 'm² (Composite Metal Decking)', 'm (Purlins & Side Rails)', 'nr (Base Plates & Bolts)'],
      description: 'Complete fabrication and erection measurement for heavy structural steel frames, transfer structures, secondary steel, and composite metal decking.',
      items: [
        'Universal Beams (UB) and Universal Columns (UC) categorized by weight schedule (t)',
        'Structural hollow sections (RHS, SHS, CHS) and architectural feature trusses',
        'Galvanised composite floor decking (Kingspan Multideck, Tata ComFlor) with shear studs',
        'Cold-rolled zed and cee section purlins, side rails, and sag rods',
        'Holding down bolt assemblies, base plates, splice connections, and gusset plates',
        'Architectural secondary steel: fire escapes, cat ladders, balustrades, and handrails',
      ],
    },
    {
      id: 'masonry',
      groupCode: 'NRM2 Group 4',
      name: 'Masonry, Brickwork & Blockwork',
      icon: '🧱',
      units: ['m² (Half-Brick Face Area)', 'm² (Blockwork Wall Area)', 'm (DPC & Cavity Trays)', 'nr (Lintels & Windposts)'],
      description: 'Detailed unit rates, mortar bedding, cavity wall insulation, and architectural brick detailing for residential, commercial, and heritage schemes.',
      items: [
        'Facing brickwork: metric/imperial clay bricks in stretcher, English, or Flemish bond (m²)',
        'Dense concrete common blocks, lightweight aggregate blocks, and aerated Celcon blocks',
        'Partial and full-fill rigid cavity insulation (PIR boards, mineral wool slabs)',
        'Stainless steel wall ties (Type 1 to 4 to BS EN 845-1), debonding ties, and bed joint reinforcement',
        'Damp proof courses (DPC), stepped cavity trays, weep vents, and gas barrier membranes (m)',
        'Galvanised and stainless steel box lintels, prestressed concrete lintels, and bespoke windposts (nr)',
      ],
    },
    {
      id: 'facades',
      groupCode: 'NRM2 Group 4',
      name: 'Facades, Cladding & Curtain Walling',
      icon: '🏢',
      units: ['m² (Cladding & Glazing Area)', 'm (Aluminium Flashings & Cills)', 'm (Fire Cavity Barriers)', 'nr (Doors & Louvres)'],
      description: 'External building envelope quantification covering unitised and stick curtain walling, rainscreen cladding, and architectural glass assemblies.',
      items: [
        'Rainscreen cladding systems: aluminium composite panels, terracotta baguettes, zinc, and fibre cement',
        'Thermally broken aluminium stick curtain walling and structural silicone glazed (SSG) screens',
        'Intumescent and mineral wool vertical and horizontal cavity fire barriers (m)',
        'Aluminium pressings, parapet copings, bespoke window cills, and perimeter flashings',
        'External solar shading louvres, brise-soleil, and perforated screening panels',
        'Spandrel panels with integrated non-combustible A1/A2 insulation backing',
      ],
    },
    {
      id: 'roofing',
      groupCode: 'NRM2 Group 4',
      name: 'Commercial Roofing & Waterproofing',
      icon: '🏠',
      units: ['m² (Roof Surface Area)', 'm (Eaves, Ridges & Valleys)', 'm (Parapet Flashings)', 'nr (Rooflights & Outlets)'],
      description: 'Full quantification of flat membrane roofing systems, liquid-applied waterproofing, standing seam metal roofs, and pitched tile/slate assemblies.',
      items: [
        'Single-ply polymeric membranes (Sika Sarnafil, Bauder, Renolit Alkorplan) with tapered insulation',
        'Reinforced bituminous membrane (RBM) warm and inverted roof build-ups',
        'Hot-melt structural waterproofing and mastic asphalt to podiums and inverted car parks',
        'Standing seam aluminium and zinc roofing systems with acoustic underlays',
        'Pitched roofing: natural Spanish / Welsh slates and interlocking concrete or clay tiles',
        'Rainwater outlets, rainwater pipes, valley gutters, and integrated polycarbonate rooflights',
      ],
    },
    {
      id: 'fitout',
      groupCode: 'NRM2 Group 4',
      name: 'Drylining, Partitions & Ceilings',
      icon: '🪚',
      units: ['m² (Partitions & Ceilings)', 'm (Deflection Heads & Trims)', 'm² (Plaster Skim)', 'nr (Internal Doorsets)'],
      description: 'High-speed measurement of metal stud partitions, acoustic drywall assemblies, suspended ceilings, and architectural commercial fit-outs.',
      items: [
        'Metal stud partition systems (British Gypsum Gypframe, Knauf, Siniat 50mm, 70mm, 92mm, 146mm)',
        'Fire-rated (FireLine), acoustic (SoundBloc), and moisture-resistant (MoisturePanel) plasterboards',
        'Taped and jointed seamless finish or two-coat Thistle multi-finish skim plaster (m²)',
        'Deflection head tracks accommodating structural slab movement (m)',
        'Suspended ceilings: exposed grid mineral fibre tiles (Armstrong, Rockfon) and MF plasterboard ceilings',
        'Internal solid core fire doorsets (FD30S, FD60S) complete with architectural ironmongery schedules',
      ],
    },
    {
      id: 'mep',
      groupCode: 'NRM2 Group 5',
      name: 'M&E / MEP Building Services',
      icon: '⚡',
      units: ['m (Pipework & Ductwork Runs)', 'm (Cable Tray & Trunking)', 'nr (Luminaires & Outlets)', 'nr (AHUs, Pumps & VRF)'],
      description: 'Turnkey measurement of commercial mechanical, electrical, and public health installations structured to NRM2 Group 5 building services.',
      items: [
        'Commercial heating, ventilation, and air conditioning (HVAC) ductwork with acoustic lagging (m)',
        'Hot and cold domestic water services: copper, stainless steel, and multilayer pipework',
        'Low voltage distribution: main switchboards, sub-distribution boards, busbar trunking, and metering',
        'Cable containment networks: galvanised perforated cable trays, cable ladders, and wire basket',
        'Internal and external LED luminaires, emergency lighting packs, and addressable lighting controls',
        'Addressable fire alarm systems, disabled refuge systems, access control, and CCTV infrastructure',
      ],
    },
    {
      id: 'external-works',
      groupCode: 'NRM2 Group 8',
      name: 'External Works, Hard Landscaping & Civils',
      icon: '🌳',
      units: ['m² (Paving & Surfacing Area)', 'm (Kerbs, Edgings & Channels)', 'm (Boundary Fencing & Walls)', 'nr (Bollards & Street Furniture)'],
      description: 'All external infrastructure: car parks, block paving, boundary fencing, road kerbing, and Section 278 highway connection works.',
      items: [
        'Tarmacadam and asphalt surfacing: base course, binder course, and SMA surface courses (m²)',
        'Permeable concrete block paving (PCCP) and natural granite setts on sand bed',
        'Standard precast concrete kerbs (HB2, BN, SP), conservation kerbs, and drainage channels (m)',
        'Boundary security fencing (weldmesh, palisade, timber acoustic fencing) and vehicular gates',
        'Street furniture: stainless steel bollards, cycle shelters, lighting columns, and armco crash barriers',
        'Section 278 off-site highway modification packages complying with local UK highways authority standards',
      ],
    },
  ]

  const filteredGroups = selectedGroup === 'all' 
    ? tradeGroups 
    : tradeGroups.filter((g) => g.id === selectedGroup)

  return (
    <div className="subpage-wrapper">
      {/* Subpage Hero Banner */}
      <section className="subpage-hero">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Work Packages Covered</span>
          </div>

          <div className="subpage-hero-content">
            <span className="section-tag">RICS NRM2 Trade Coverage</span>
            <h1 className="subpage-hero-title">
              Complete UK Construction <span className="text-red">Work Packages & Scopes</span>
            </h1>
            <p className="subpage-hero-desc">
              Whether you are a specialist trade subcontractor pricing a single element or a main contractor bidding a turnkey commercial scheme, our certified quantity surveyors measure all RICS NRM2 packages with complete precision.
            </p>
            <div className="subpage-hero-actions">
              <Link to="/contact" className="btn btn-red btn-lg">
                Submit Drawings for Scope Quote →
              </Link>
              <Link to="/services" className="btn btn-outline-white btn-lg">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Trade Scopes Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-40">
            <span className="section-tag">All Packages Covered</span>
            <h2 className="section-title">
              Explore Our <span className="text-navy">Trade Measurement Capabilities</span>
            </h2>
            <p className="section-desc">
              Select a work package below to inspect the typical line-item deliverables, standard units of measurement, and RICS NRM2 classification rules.
            </p>
          </div>

          {/* Trade Filter Tabs */}
          <div className="trade-filter-nav">
            <button
              className={`trade-filter-btn ${selectedGroup === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedGroup('all')}
            >
              All Packages ({tradeGroups.length})
            </button>
            {tradeGroups.map((g) => (
              <button
                key={g.id}
                className={`trade-filter-btn ${selectedGroup === g.id ? 'active' : ''}`}
                onClick={() => setSelectedGroup(g.id)}
              >
                {g.name.split(',')[0]}
              </button>
            ))}
          </div>

          {/* Trade Cards Grid */}
          <div className="trade-detail-grid">
            {filteredGroups.map((trade) => (
              <div className="trade-card-deep" key={trade.id} id={trade.id}>
                <div className="trade-card-header">
                  <div className="trade-card-icon">{trade.icon}</div>
                  <div className="trade-card-title-wrap">
                    <span className="trade-group-badge">{trade.groupCode}</span>
                    <h3 className="trade-card-name">{trade.name}</h3>
                  </div>
                </div>

                <p className="trade-card-desc">{trade.description}</p>

                {/* Units Row */}
                <div className="trade-units-block">
                  <span className="units-label">Measurement Units (UK Standard):</span>
                  <div className="units-pills">
                    {trade.units.map((u, i) => (
                      <span className="unit-pill" key={i}>
                        {u}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Scope Items */}
                <div className="trade-items-block">
                  <h4 className="trade-items-heading">Standard Measured Items:</h4>
                  <ul className="trade-bullet-list">
                    {trade.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="trade-card-footer">
                  <Link to="/contact" className="btn btn-outline-navy btn-sm">
                    Request {trade.name.split(',')[0]} Takeoff →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Banner */}
          <div className="cta-banner-subpage">
            <div className="cta-banner-content">
              <h3>Need a bespoke multi-trade package or single-trade takeoff?</h3>
              <p>Upload your drawing set and specifications for a prompt review and confirmed fee proposal.</p>
            </div>
            <Link to="/contact" className="btn btn-red btn-lg">
              Upload Drawings Now →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
