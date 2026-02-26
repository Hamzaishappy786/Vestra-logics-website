"use client";

import React from 'react';
import Image from 'next/image';

/**
 * AwwwardsSection Component
 * 
 * This component clones the award highlight section of the Cuberto website.
 * It includes the "Agency of the Year" headline, a descriptive paragraph, 
 * and the office atmosphere photo with soft interior lighting.
 */
const AwwwardsSection: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Photo Section - Office Atmosphere */}
      <section className="cb-preview py-[80px] md:py-[120px] lg:py-[150px]">
        <div className="container px-5 md:px-10 max-w-[1440px] mx-auto">
          <div className="cb-preview-main max-w-[1100px] mx-auto">
            <div className="relative overflow-hidden rounded-[30px] md:rounded-[40px] aspect-[16/9] w-full">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1d36a954-389b-4c40-ac22-c1dd3f460c00-cuberto-com/assets/images/2-4.jpg"
                alt="Cuberto Office Atmosphere"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1100px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Award Highlight Overview Section */}
      <section className="cb-overview pb-[100px] md:pb-[150px] lg:pb-[200px]" id="awwwards">
        <div className="container px-5 md:px-10 max-w-[1440px] mx-auto">
          {/* Main Headline */}
          <div className="cb-overview-header mb-10 md:mb-16">
            <h2 
              className="text-[48px] md:text-[80px] lg:text-[100px] font-medium leading-[1] tracking-[-0.04em] text-black"
              aria-label="Agency of the Year according to Awwwards"
            >
              Agency of the Year<br className="hidden md:block" /> according to<br className="hidden md:block" /> Awwwards
            </h2>
          </div>

          {/* Divider line */}
          <div className="cb-overview-divider w-full h-[1px] bg-[#cccccc] mb-10 md:mb-16"></div>

          {/* Two-column grid content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 items-start">
            {/* Left Column - Small Title */}
            <div className="cb-overview-grid-col -left col-span-1">
              <div className="cb-overview-caption">
                <h3 className="text-[12px] md:text-[14px] font-bold uppercase tracking-[0.05em] leading-tight text-black">
                  Agency of the Year<br className="hidden md:block" /> according to<br className="hidden md:block" /> Awwwards
                </h3>
              </div>
            </div>

            {/* Right Column - Descriptive Paragraph */}
            <div className="cb-overview-grid-col -right col-span-1 md:col-span-2">
              <div className="cb-overview-info max-w-[800px]">
                <div className="cb-overview-text">
                  <p className="text-[20px] md:text-[24px] lg:text-[28px] leading-[1.4] font-normal text-black">
                    We know winning isn’t everything. However, among the many awards we’ve received, 
                    we highlight the most prestigious and respected among international design communities: 
                    the <a 
                      href="https://www.awwwards.com/cuberto/" 
                      className="inline-block border-b border-black transition-opacity hover:opacity-50"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Awwwards
                    </a> Agency of the Year trophy and the <a 
                      href="https://dribbble.com/cuberto" 
                      className="inline-block border-b border-black transition-opacity hover:opacity-50"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Dribbble
                    </a> 100K Club Member Award.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AwwwardsSection;