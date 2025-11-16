
import React from 'react';

interface IconProps {
  className?: string;
}

export const SearchIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

export const MotorcycleIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.5 10.5C18.5 8.29086 16.7091 6.5 14.5 6.5C12.2909 6.5 10.5 8.29086 10.5 10.5C10.5 12.7091 12.2909 14.5 14.5 14.5C16.7091 14.5 18.5 12.7091 18.5 10.5Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5.5 10.5C5.5 8.29086 7.29086 6.5 9.5 6.5C11.7091 6.5 13.5 8.29086 13.5 10.5C13.5 12.7091 11.7091 14.5 9.5 14.5C7.29086 14.5 5.5 12.7091 5.5 10.5Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12.5 13.5L14.5 9.5L10 6.5L6.5 9.5H3.5L3.5 13.5H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 13.5L19.5 13.5L20.5 10.5L18.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const ThreeWheelerIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 15.5C19 13.567 17.433 12 15.5 12C13.567 12 12 13.567 12 15.5C12 17.433 13.567 19 15.5 19C17.433 19 19 17.433 19 15.5Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8.5 15.5C8.5 13.567 6.933 12 5 12C3.067 12 1.5 13.567 1.5 15.5C1.5 17.433 3.067 19 5 19C6.933 19 8.5 17.433 8.5 15.5Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M22.5 15.5C22.5 13.567 20.933 12 19 12C17.067 12 15.5 13.567 15.5 15.5C15.5 17.433 17.067 19 19 19C20.933 19 22.5 17.433 22.5 15.5Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M17.5 12V8C17.5 6.89543 16.6046 6 15.5 6H5C3.89543 6 3 6.89543 3 8V12H17.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 8L6.5 4L14 4L17.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


export const TruckIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 18C20 19.1046 19.1046 20 18 20C16.8954 20 16 19.1046 16 18C16 16.8954 16.8954 16 18 16C19.1046 16 20 16.8954 20 18Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 18C8 19.1046 7.10457 20 6 20C4.89543 20 4 19.1046 4 18C4 16.8954 4.89543 16 6 16C7.10457 16 8 16.8954 8 18Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16 18H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M21 12V6.94541C21 6.3986 20.597 5.9622 20.0546 5.89949L15 5.25L14.5 4H4V16H2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 18H21V12H14V18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const TractorIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 18C14 19.6569 12.6569 21 11 21C9.34315 21 8 19.6569 8 18C8 16.3431 9.34315 15 11 15C12.6569 15 14 16.3431 14 18Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M19 18C19 19.6569 17.6569 21 16 21C14.3431 21 13 19.6569 13 18C13 16.3431 14.3431 15 16 15C17.6569 15 19 16.3431 19 18Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M22 15H19.5L16 9H8.5L5 15H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 15V9.6C11 9.26863 10.7314 9 10.4 9H7.5L8.5 6H13L15.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.5 15C5.5 13.3431 6.84315 12 8.5 12H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);

export const ChevronRightIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
);
