function HellicottLogo(props) {
    return (
        <svg height={props.size} version="1.1" viewBox="0 0 464.85 533.67" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(-1814.7 -1058.1)">
                <path d="m1824.7 1453.4 222.42 128.42 222.42-128.42v-256.83l-222.42-128.42-222.42 128.42z" fill={props.hexagonColour}/>
                <path d="m2124.7 1220.2-0.7866 233.01" fill="none" stroke={props.mountainColour} strokeWidth="34.016" />
                <path d="m2112.4 1304.3-135.52 50.003c5.7138-27.999 29.028-90.063 37.493-92.045 11.587-2.7121 31.959 24.181 44.626 38.195 7.5484-13.16 10.161-19.938 16.888-21.986 3.2342-0.9848 16.886 15.077 36.516 25.833z" fill={props.mountainColour}/>
                <g fill="none" stroke={props.gitColour} strokeLinecap="round" strokeWidth="27.229">
                    <circle cx="1979.9" cy="1154.3" r="19.56"/>
                    <circle cx="2124" cy="1185.7" r="19.56"/>
                    <circle cx="1980.6" cy="1491.5" r="19.56"/>
                </g>
                <g transform="matrix(.6 0 0 -.6 1748.3 1858.8)" fill="none" stroke={props.gitColour} strokeWidth="56.693">
                    <path d="m386.89 1142.3v-490.74"/>
                    <path d="m386.63 752.17c-2.655 251.22 249.57-10.33 240.2 339.46"/>
                </g>
            </g>
        </svg>
    );
}

export default HellicottLogo;