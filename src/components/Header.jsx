function Header() {
  return (
    <header className="pt-40 pb-20 px-8 md:px-12 lg:px-24 max-w-[1440px] mx-auto">

      {/* Hero Text */}
      <div className="mb-8">
        <h1 className="text-[3.5rem] font-['Newsreader'] font-normal tracking-tight text-[#5C7CFA] leading-tight mb-4">
          Harsh Patel
        </h1>
        <p className="font-['Inter'] text-[0.75rem] text-[#425675] uppercase tracking-[0.2em] mb-6">
          Tech Professional &amp; Developer
        </p>
        <p className="font-['Newsreader'] text-[1rem] text-[#E2E2E5]/80 leading-relaxed max-w-2xl mb-10">
          I leverage technology to make systems more reliable and efficient while helping teams work smarter. My background spans IT operations, cloud solutions, and process improvement, where I've focused on solving problems, streamlining workflows, and bridging the gap between technical teams and business needs. I enjoy collaborating across teams, tackling challenges, and continuously learning to build solutions that have real, lasting impact.
        </p>

        {/* Certification Badges */}
        <p className="font-['Inter'] text-[0.75rem] uppercase tracking-[0.2em] text-[#ca6e00] mb-3">Certifications &amp; Education</p>
        <div className="flex flex-wrap gap-3 mb-10">
          <span className="bg-[#1E2022] text-[#E2E2E5] font-['Inter'] text-[0.75rem] uppercase tracking-[0.2em] px-4 py-2">
            ✦ <span className="font-black text-[#5C7CFA]">Texas A&amp;M University</span> B.S., Industrial and Systems Engineering
          </span>
          <span className="bg-[#1E2022] text-[#E2E2E5] font-['Inter'] text-[0.75rem] uppercase tracking-[0.2em] px-4 py-2">
            ✦ <span className="font-black text-[#5C7CFA]">AWS</span> Certified Developer – Associate
          </span>
          <span className="bg-[#1E2022] text-[#E2E2E5] font-['Inter'] text-[0.75rem] uppercase tracking-[0.2em] px-4 py-2">
            ✦ <span className="font-black text-[#5C7CFA]">ITIL 4</span> Foundations
          </span>
          <span className="bg-[#1E2022] text-[#E2E2E5] font-['Inter'] text-[0.75rem] uppercase tracking-[0.2em] px-4 py-2">
            ✦ <span className="font-black text-[#5C7CFA]">ServiceNow</span> Certified Implementation Specialist – Data Foundations
          </span>
        </div>

        {/* Experience */}
        <div id="experience" className="scroll-mt-24">
        <p className="font-['Inter'] text-[0.75rem] uppercase tracking-[0.2em] text-[#ca6e00] mb-6">Professional Experience</p>
        <div className="flex flex-col gap-2 max-w-3xl">

          <div className="bg-[#1E2022] px-8 py-6 border-l-2 border-[#5C7CFA]">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-4">
              <div>
                <p className="font-['Newsreader'] text-[1rem] font-bold text-[#E2E2E5]">IT Cloud Solutions Engineer</p>
                <p className="font-['Inter'] text-[0.75rem] uppercase tracking-[0.2em] text-[#5C7CFA] mt-1">Entek Engineering</p>
              </div>
              <p className="font-['Inter'] text-[0.75rem] uppercase tracking-[0.15em] text-[#425675] shrink-0">Aug 2024 – Present</p>
            </div>
            <ul className="space-y-2">
              {[
                'Designed and implemented scalable AWS cloud infrastructure using Lambda and serverless architectures to support high availability.',
                'Built and managed infrastructure with Terraform and CloudFormation, enabling automated IaC deployments.',
                'Configured AWS services including S3, IAM, API Gateway, and VPC for secure and reliable operations.',
                'Implemented monitoring and logging with CloudWatch, improving visibility and enabling proactive issue resolution.',
                'Established cloud governance and security controls ensuring compliance with best practices.',
              ].map((item, i) => (
                <li key={i} className="font-['Newsreader'] text-[1rem] text-[#E2E2E5]/60 leading-relaxed flex items-start gap-2">
                  <span className="text-[#425675] mt-0.5 shrink-0">–</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#1E2022] px-8 py-6 border-l-2 border-[#5C7CFA]">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-4">
              <div>
                <p className="font-['Newsreader'] text-[1rem] font-bold text-[#E2E2E5]">Business Systems Analyst – Cloud &amp; Infrastructure Operations</p>
                <p className="font-['Inter'] text-[0.75rem] uppercase tracking-[0.2em] text-[#5C7CFA] mt-1">BNSF Railway</p>
              </div>
              <p className="font-['Inter'] text-[0.75rem] uppercase tracking-[0.15em] text-[#425675] shrink-0">May 2023 – Aug 2024</p>
            </div>
            <ul className="space-y-2">
              {[
                'Supported cloud and on-prem infrastructure operations, ensuring system stability, performance, and uptime.',
                'Led incident response and root cause analysis, resolving critical production issues and improving reliability.',
                'Collaborated with engineering teams on deployments, system upgrades, and cloud migration initiatives.',
                'Automated operational workflows and incident tracking, reducing manual intervention and improving response efficiency.',
                'Acted as liaison between technical teams and stakeholders, ensuring clear communication of system issues.',
                'Supported SAP S/4HANA integrations, troubleshooting issues and maintaining data integrity across business processes.',
              ].map((item, i) => (
                <li key={i} className="font-['Newsreader'] text-[1rem] text-[#E2E2E5]/60 leading-relaxed flex items-start gap-2">
                  <span className="text-[#425675] mt-0.5 shrink-0">–</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
        </div>

      </div>

    </header>
  );
}

export default Header;
