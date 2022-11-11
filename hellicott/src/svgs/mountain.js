function Mountains(props) {
    return (
        <svg width="167.63mm" height="118.3mm" version="1.1" viewBox="23 45 167.63 118.3" xmlns="http://www.w3.org/2000/svg">
            <circle cx="104.86" cy="98.939" r="50" fill={props.moon}/>
            <path 
                d="m22.876 166.84 167.63 0.39442c-62.595-122.22-53.236-117.29-91.9-33.92-44.441-47.219-20.931-38.575-75.729 33.526z" 
                fill={props.mountains}
            />
        </svg>
    );
}

export default Mountains;