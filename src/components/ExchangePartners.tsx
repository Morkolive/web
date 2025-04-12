import React from 'react';

    const ExchangePartners = () => {
      return (
        <section id="exchange-partners" className="relative z-10 py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6 text-center">Exchange Partners</h2>
            <div className="flex justify-center gap-8">
              {/* BingX */}
              <a href="https://bingx.com/en/accounts/partner/Memex" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://cdn.glitch.global/c0240ef5-b1d3-409c-a790-588d18d5cf32/bingx.jpg"
                  alt="BingX"
                  className="w-32 h-auto"
                />
              </a>
              {/* Bybit */}
              <a href="https://www.bybit.com/en/sign-up?affiliate_id=122882&group_id=986951&group_type=1&ref_code=122882" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://cdn.glitch.global/c0240ef5-b1d3-409c-a790-588d18d5cf32/bybit.jpg"
                  alt="Bybit"
                  className="w-32 h-auto"
                />
              </a>
            </div>
          </div>
        </section>
      );
    };

    export default ExchangePartners;
