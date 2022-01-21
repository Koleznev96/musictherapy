import React from 'react';
import Svg, {Path, LinearGradient, Stop, Defs} from 'react-native-svg';


export const GlobalSvgSelector = ({id}) => {
    switch (id) {
        case 'arrow_bottom':
            return (
                <Svg width="28" height="28" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M19.375 14L12.25 7C11.75 6.5 11 6.5 10.5 7C10 7.5 10 8.25 10.5 8.75L16.625 15L10.5 21.25C10 21.75 10 22.5 10.5 23C10.75 23.25 11 23.375 11.375 23.375C11.75 23.375 12 23.25 12.25 23L19.375 16C19.875 15.375 19.875 14.625 19.375 14C19.375 14.125 19.375 14.125 19.375 14Z" fill="#4FC574"/>
                </Svg>
            );
        case 'arrow_top':
            return (
                <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M16.0003 2.66669C13.3632 2.66669 10.7854 3.44867 8.59273 4.91376C6.40007 6.37884 4.69111 8.46123 3.68194 10.8976C2.67277 13.3339 2.40872 16.0148 2.92319 18.6012C3.43766 21.1876 4.70754 23.5634 6.57224 25.4281C8.43694 27.2928 10.8127 28.5627 13.3991 29.0772C15.9855 29.5916 18.6664 29.3276 21.1028 28.3184C23.5391 27.3092 25.6215 25.6003 27.0866 23.4076C28.5517 21.215 29.3337 18.6371 29.3337 16C29.3337 14.2491 28.9888 12.5152 28.3187 10.8976C27.6487 9.2799 26.6665 7.81004 25.4284 6.57193C24.1903 5.33382 22.7205 4.35169 21.1028 3.68163C19.4851 3.01156 17.7513 2.66669 16.0003 2.66669V2.66669ZM16.0003 26.6667C13.8907 26.6667 11.8284 26.0411 10.0742 24.869C8.32012 23.697 6.95295 22.0311 6.14562 20.082C5.33828 18.1329 5.12705 15.9882 5.53862 13.9191C5.9502 11.8499 6.9661 9.94931 8.45786 8.45755C9.94962 6.96579 11.8502 5.94989 13.9194 5.53831C15.9885 5.12674 18.1332 5.33797 20.0823 6.14531C22.0314 6.95264 23.6973 8.31981 24.8693 10.0739C26.0414 11.8281 26.667 13.8904 26.667 16C26.667 18.829 25.5432 21.5421 23.5428 23.5425C21.5424 25.5429 18.8293 26.6667 16.0003 26.6667V26.6667Z" fill="#4FC574"/>
                    <Path d="M21.15 15.0666L14.5 8.53332C14.0333 8.06665 13.3333 8.06665 12.8667 8.53332C12.4 8.99998 12.4 9.69998 12.8667 10.1666L18.5833 16L12.8667 21.8333C12.4 22.3 12.4 23 12.8667 23.4667C13.1 23.7 13.3333 23.8167 13.6833 23.8167C14.0333 23.8167 14.2667 23.7 14.5 23.4667L21.15 16.9333C21.6167 16.35 21.6167 15.65 21.15 15.0666C21.15 15.1833 21.15 15.1833 21.15 15.0666Z" fill="#4FC574"/>
                </Svg>
            );
        default:
            return null;
    }
};