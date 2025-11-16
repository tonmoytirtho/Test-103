
import React from 'react';

const KeySegments: React.FC = () => {
    const segments = ['Urban Mobility', 'Last-Mile Delivery', 'Agriculture', 'Light Commercial'];

    return (
        <div className="bg-[#F5F5F5] pb-20 lg:pb-28">
            <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
                <div className="border-t border-gray-200 pt-12">
                     <div className="flex flex-wrap items-center justify-center gap-4 text-center">
                        <h4 className="text-lg font-semibold text-[#111111] mr-4">Serving Key Segments:</h4>
                        {segments.map(segment => (
                            <span key={segment} className="inline-block bg-white text-[#333333] text-sm font-semibold px-5 py-2 rounded-full border border-gray-200 shadow-sm">
                                {segment}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KeySegments;
