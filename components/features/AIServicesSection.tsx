import React from 'react';

const AIServicesSection = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">AI & AUTOMATION SERVICES</h1>
        
        <h2 className="text-2xl font-semibold text-gray-800">
          Achieve More Than You Imagined Possible With AI And Automation
        </h2>
      </div>
      
      <div className="text-center mb-8">
        <p className="text-gray-700 mb-4">
          Scaling your businesses no longer means growing your headcount. With large enterprises already reducing their workforces and tech leaders predicting the first one-person $3 billion company, AI-powered automation is quickly becoming essential. Small businesses must adopt AI now to stay competitive.
        </p>
        
        <p className="text-gray-700">
          MQLPlow&apos;s AI and automation solutions are built to maximise ROI—boosting productivity, increasing revenue per employee, and improving profit margins. We simplify AI adoption for small businesses, delivering clear, actionable strategies that add measurable value and keep you ahead of the competition.
        </p>
      </div>
      
      <div className="border-t border-gray-200 pt-8 mb-8"></div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Marketing Automation Section */}
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Marketing Automation</h3>
          <p className="text-gray-700 mb-4 text-center">
            Boost customer attraction and drive sales with targeted, automated marketing workflows.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Design and build streamlined processes to increase your team&apos;s capacity</li>
            <li>Wages, Geralt into workflows to create, publish, and repurpose assets to anticipate</li>
            <li>Optimise campaign performance and improve personalisation to maximise ROI</li>
          </ul>
        </div>
        
        {/* Systems & Data Integration Section */}
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Systems & Data Integration</h3>
          <p className="text-gray-700 mb-4 text-center">
            Connect isolated applications to streamline operations and ensure smooth, accurate data flow.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Improve accuracy of your CRM and other data sources for more reliable insights</li>
            <li>Eliminate manual data entry processes to increase efficiency</li>
            <li>Analyze and query data across multiple sources to aid decision making</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AIServicesSection;