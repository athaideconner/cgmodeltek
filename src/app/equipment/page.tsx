import { Metadata } from 'next';
import Image from 'next/image';
import ArchitecturalBackground from '@/components/ui/ArchitecturalBackground';

export const metadata: Metadata = {
  title: 'Our Equipment - CG Model Tek',
  description: 'State-of-the-art equipment and facilities for aerospace engineering and wind tunnel model manufacturing.',
};

// Equipment categories and data structured to match the cgmodeltek.com website
const equipmentCategories = [
  {
    id: 'cnc-milling',
    name: 'CNC Milling Machines',
    description: 'Advanced milling capabilities with various axis configurations for complex aerospace components.',
    subcategories: [
      {
        id: '5-axis',
        name: '5-Axis',
        description: 'Our highest precision multi-axis machines for complex aerospace components',
        machines: [
          {
            name: 'Mazak i-700',
            dimensions: '24" x 43" x 23"',
            imageSrc: '/images/equipment/CNC Milling Machines/5-Axis/Mazak_i-700_24_x_43_x_23.png',
          },
          {
            name: 'Mazak 730-5X',
            dimensions: '33" x 29" x 22"',
            imageSrc: '/images/equipment/CNC Milling Machines/5-Axis/Mazak_730-5X_33_x_29_x_22.png',
          },
          {
            name: 'Mazak I-1050T',
            dimensions: '47" x 54" x 35"',
            imageSrc: '/images/equipment/CNC Milling Machines/5-Axis/Mazak_I-1050T_47_x_54_x_35.png',
          },
          {
            name: 'Mazak VCU 400-5X',
            dimensions: '20" x 16" x 20"',
            imageSrc: '/images/equipment/CNC Milling Machines/5-Axis/Mazak_VCU_400-5X_20_x_16_x_20.jpeg',
          },
          {
            name: 'Cincinnati U5',
            dimensions: '100" x 156" x 40"',
            imageSrc: '/images/equipment/CNC Milling Machines/5-Axis/Cincinnati U5_ 100_x_156_x_40.png',
          },
        ],
      },
      {
        id: '4-axis',
        name: '4-Axis',
        description: 'Superior precision with 4-axis capability for complex parts',
        machines: [
          {
            name: 'Haas VF-9',
            dimensions: '84" x 40" x 30"',
            imageSrc: '/images/equipment/CNC Milling Machines/4-Axis/Haas_VF-9_84_x_40_x_30.jpeg',
          },
          {
            name: 'Mazak VTC 250/50',
            dimensions: '69" x 25" x 26"',
            imageSrc: '/images/equipment/CNC Milling Machines/4-Axis/Mazak_VTC_250by50_69_x_25_x_26.png',
          },
          {
            name: 'Milltronics VKM4',
            dimensions: '30" x 15" x 11"',
            imageSrc: '/images/equipment/CNC Milling Machines/4-Axis/Milltronics_VKM4_30_x_15_x_11.jpeg',
          },
        ],
      },
      {
        id: '3-axis',
        name: '3-Axis',
        description: 'Versatile 3-axis machining for precision components',
        machines: [
          {
            name: 'Cincinnati Sabre 2000',
            dimensions: '40" x 20" x 21"',
            imageSrc: '/images/equipment/CNC Milling Machines/3-Axis/Cincinnati _Sabre_2000_40_x_20_x_21.png',
          },
          {
            name: 'Cincinnati Sabre 1000',
            dimensions: '40" x 20" x 21"',
            imageSrc: '/images/equipment/CNC Milling Machines/3-Axis/Cincinnati _Sabre_1000_40_x_20_x_21.png',
          },
          {
            name: 'Cincinnati Lancer',
            dimensions: '40" x 20" x 21"',
            imageSrc: '/images/equipment/CNC Milling Machines/3-Axis/Cincinnati _Lancer_40_x_20_x_21.png',
          },
          {
            name: 'Milltronics VKM3',
            dimensions: '30" x 15" x 11"',
            imageSrc: '/images/equipment/CNC Milling Machines/3-Axis/Milltronics_VKM3_30_x_15_x_11.jpeg',
          },
        ],
      },
      {
        id: '2-axis',
        name: '2-Axis',
        description: 'Fundamental 2-axis machining capabilities',
        machines: [
          {
            name: 'Milltronics VKM2',
            dimensions: '30" x 15" x 11"',
            imageSrc: '/images/equipment/CNC Milling Machines/2-Axis/Milltronics_VKM2_30_x_15_x_11.jpeg',
          },
        ],
      },
    ],
  },
  {
    id: 'cnc-lathe',
    name: 'CNC Lathe Machines',
    description: 'Precision turning and milling capabilities for cylindrical components.',
    subcategories: [
      {
        id: '3-axis-live',
        name: '3-Axis (live tooling)',
        description: 'Advanced lathes with live tooling capabilities',
        machines: [
          {
            name: 'Mazak QTN 350M',
            dimensions: '16" Dia. x 48"',
            imageSrc: '/images/equipment/CNC Lathe Machines/3-Axis (live tooling)/Mazak_QTN_350M_16_Dia._x_48.jpeg',
          },
        ],
      },
      {
        id: '2-axis',
        name: '2-Axis',
        description: 'Standard lathe turning operations',
        machines: [
          {
            name: 'Mazak QTN 450',
            dimensions: '20" Dia. x 80"',
            imageSrc: '/images/equipment/CNC Lathe Machines/2-Axis/Mazak_QTN_450_20_Dia._x_80.jpeg',
          },
          {
            name: 'BridgePort EZ Path II',
            dimensions: '10" Dia. x 36"',
            imageSrc: '/images/equipment/CNC Lathe Machines/2-Axis/BridgePort_EZ_Path_II_10_Dia._x_36.png',
          },
        ],
      },
    ],
  },
  {
    id: 'cnc-wire-edm',
    name: 'CNC Wire EDM Machines',
    description: 'Wire electrical discharge machining for precision cutting of complex geometries.',
    subcategories: [
      {
        id: '4-axis',
        name: '4 Axis',
        description: 'Precision wire cutting with 4-axis control',
        machines: [
          {
            name: 'Mitsubishi FA20S',
            dimensions: '13" x 19" x 11.5"',
            imageSrc: '/images/equipment/CNC Wire EDM Machines/4 Axis/Mitsubishi_FA20S_13_x_19_x_11.5.jpeg',
          },
          {
            name: 'Mitsubishi DWC90HA',
            dimensions: '10" x 12" x 6.5"',
            imageSrc: '/images/equipment/CNC Wire EDM Machines/4 Axis/Mitsubishi_DWC90HA_10_x_12_x_6.5.jpeg',
          },
        ],
      },
    ],
  },
  {
    id: 'cnc-die-sink-edm',
    name: 'CNC Die Sink EDM Machines',
    description: 'Electrical discharge machining for creating precise cavities and complex features.',
    subcategories: [
      {
        id: '4-axis',
        name: '4 Axis',
        description: 'Advanced die sinking with 4-axis capabilities',
        machines: [
          {
            name: 'Mitsubishi EA-22',
            dimensions: '19" x 15" x 14"',
            imageSrc: '/images/equipment/CNC Die Sink EDM Machines/4 Axis/Mitsubishi_EA-22_19_x_15_x_14.png',
          },
        ],
      },
    ],
  },
];

export default function EquipmentPage() {
  return (
    <div className="bg-gray-800 min-h-screen">
      {/* Header Section */}
      <div className="relative bg-gray-900 py-24 sm:py-32 overflow-hidden">
        <ArchitecturalBackground startIndex={4} count={3} opacity={0.3} />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-800/80" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Our Equipment
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              State-of-the-art facilities and equipment for precision aerospace engineering and manufacturing.
            </p>
          </div>
        </div>
      </div>

      {/* Equipment Categories */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        {equipmentCategories.map((category) => (
          <div key={category.id} className="mb-24" id={category.id}>
            <div className="border-b border-gray-700 pb-4 mb-10">
              <h2 className="text-3xl font-bold tracking-tight text-white">{category.name}</h2>
              <p className="mt-4 text-lg text-gray-300">{category.description}</p>
            </div>

            {category.subcategories.map((subcategory) => (
              <div key={subcategory.id} className="mb-16" id={`${category.id}-${subcategory.id}`}>
                <h3 className="text-2xl font-semibold text-primary-400 mb-6">{subcategory.name}</h3>
                <p className="mb-8 text-gray-300">{subcategory.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {subcategory.machines.map((machine, index) => (
                    <div 
                      key={`${subcategory.id}-machine-${index}`} 
                      className="bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]"
                    >
                      <div className="relative h-64">
                        <Image
                          src={machine.imageSrc}
                          alt={`${machine.name} - ${machine.dimensions}`}
                          fill
                          className="object-contain p-4 bg-gradient-to-br from-gray-600 to-gray-800"
                        />
                      </div>
                      <div className="p-5">
                        <h4 className="text-xl font-medium text-white">{machine.name}</h4>
                        <div className="mt-2 inline-block bg-primary-900/40 text-primary-200 px-3 py-1 rounded-md text-sm font-mono">
                          {machine.dimensions}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Equipment Capabilities Section */}
      <section className="bg-gray-900 py-16 relative">
        <ArchitecturalBackground startIndex={7} count={3} opacity={0.3} />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">Manufacturing Capabilities</h2>
            <p className="mt-6 text-lg text-gray-300">
              Our cutting-edge equipment enables us to provide comprehensive aerospace manufacturing solutions with exceptional precision and reliability.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "High-Precision Machining",
                description: "Capable of maintaining tolerances as tight as ±0.0005 inches for critical aerospace components."
              },
              {
                title: "Complex Geometries",
                description: "5-axis capabilities allow for single-setup machining of complex aerospace parts with intricate features."
              },
              {
                title: "Material Versatility",
                description: "Experience with aluminum, steel, titanium, Inconel, composites, and other aerospace materials."
              },
              {
                title: "Large Capacity",
                description: "Machines capable of handling components up to 156 inches, ideal for wind tunnel models."
              },
              {
                title: "Fine Surface Finishing",
                description: "Advanced EDM capabilities for superior surface finishes required in aerodynamic testing."
              },
              {
                title: "Rapid Turnaround",
                description: "Multiple parallel machining capabilities for efficient production and quick turnaround times."
              }
            ].map((capability, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary-300 mb-3">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}