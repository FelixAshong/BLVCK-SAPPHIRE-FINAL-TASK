import React from "react";

interface ServicesProps {
  // No props needed for now since this section is self-contained
}

const Services: React.FC<ServicesProps> = () => {
  return (
    <section
      id="services"
      className="w-full py-16 bg-white px-4 sm:px-6 lg:px-8 reveal"
    >
      <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
        <img
          src="/images/top chip service.png"
          alt="Services"
          className="w-32 sm:w-40 h-auto"
        />
      </div>
      <h2 className="text-center text-xl sm:text-2xl font-bold mb-8 sm:mb-12">What we do</h2>
      
      {/* Desktop Services Layout - hidden on mobile */}
      <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm text-gray-700">
        <div className="flex space-x-4">
          <div className="mt-1">
            <img
              src="/images/Group 1.png"
              alt="Service icon"
              className="object-contain flex-shrink-0"
              style={{
                width: '199px',
                height: '143px',
                marginTop: '-50px'
              }}
            />
          </div>
          <div>
            <h3 className="font-semibold mb-2">Lorem ipsum dolor</h3>
            <p>
              Sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed
              odit fugiat iusto fuga praesentium.
            </p>
          </div>
        </div>
        <div className="flex space-x-4 p-6 bg-lime-50 rounded-lg" style={{border: '1px solid rgba(148, 180, 0, 0.3)', marginTop: '-20px'}}>
          <div className="mt-1">
            <img
              src="/images/Group 2.png"
              alt="Service icon"
              className="object-contain flex-shrink-0"
              style={{
                width: '250px',
                height: '180px',
                marginTop: '-70px'
              }}
            />
          </div>
          <div>
            <h3 className="font-semibold mb-2">Lorem ipsum dolor</h3>
            <p>
              Sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed
              odit fugiat iusto fuga praesentium.
            </p>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="mt-1">
            <img
              src="/images/Group 1.png"
              alt="Service icon"
              className="object-contain flex-shrink-0"
              style={{
                width: '199px',
                height: '143px',
                marginTop: '-50px'
              }}
            />
          </div>
          <div>
            <h3 className="font-semibold mb-2">Lorem ipsum dolor</h3>
            <p>
              Sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed
              odit fugiat iusto fuga praesentium.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Services Layout - visible only on mobile */}
      <div className="lg:hidden space-y-6">
        {/* Service Card 1 */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-4 p-4 rounded-lg hover:shadow-lg transition-all duration-300 hover-lift reveal">
          <div className="flex-shrink-0">
            <img
              src="/images/Group 1.png"
              alt="Service icon"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain hover-scale transition-transform duration-300"
            />
          </div>
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-2 text-gray-900">Lorem ipsum dolor</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam.
            </p>
          </div>
        </div>
        
        {/* Service Card 2 - Featured */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-4 p-4 sm:p-6 bg-lime-50 rounded-lg border border-lime-200 hover:shadow-lg transition-all duration-300 hover-lift hover-glow reveal">
          <div className="flex-shrink-0">
            <img
              src="/images/Group 2.png"
              alt="Service icon"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain hover-scale transition-transform duration-300"
            />
          </div>
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-2 text-gray-900">Lorem ipsum dolor</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam.
            </p>
          </div>
        </div>

        {/* Service Card 3 */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-4 p-4 rounded-lg hover:shadow-lg transition-all duration-300 hover-lift reveal">
          <div className="flex-shrink-0">
            <img
              src="/images/Group 1.png"
              alt="Service icon"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain hover-scale transition-transform duration-300"
            />
          </div>
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-2 text-gray-900">Lorem ipsum dolor</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
