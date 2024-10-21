export const data = [
    {id: 1, label: '', hours: 1, minutes: 20, seconds: 4},
    {id: 2, label: '', hours: 1, minutes: 20, seconds: 4},
    {id: 3, label: '', hours: 1, minutes: 20, seconds: 4},    
]
export const cities = [
    { displayName: "New York", timeZone: "America/New_York" },
    { displayName: "Los Angeles", timeZone: "America/Los_Angeles" },
    { displayName: "Chicago", timeZone: "America/Chicago" },
    { displayName: "Toronto", timeZone: "America/Toronto" },
    { displayName: "Mexico City", timeZone: "America/Mexico_City" },
    { displayName: "London", timeZone: "Europe/London" },
    { displayName: "Paris", timeZone: "Europe/Paris" },
    { displayName: "Berlin", timeZone: "Europe/Berlin" },
    { displayName: "Rome", timeZone: "Europe/Rome" },
    { displayName: "Madrid", timeZone: "Europe/Madrid" },
    { displayName: "Moscow", timeZone: "Europe/Moscow" },
    { displayName: "Sydney", timeZone: "Australia/Sydney" },
    { displayName: "Tokyo", timeZone: "Asia/Tokyo" },
    { displayName: "Seoul", timeZone: "Asia/Seoul" },
    { displayName: "Beijing", timeZone: "Asia/Shanghai" },
    { displayName: "Hong Kong", timeZone: "Asia/Hong_Kong" },
    { displayName: "Singapore", timeZone: "Asia/Singapore" },
    { displayName: "Dubai", timeZone: "Asia/Dubai" },
    { displayName: "Rio de Janeiro", timeZone: "America/Sao_Paulo" },
    { displayName: "Buenos Aires", timeZone: "America/Argentina/Buenos_Aires" },
    { displayName: "Cairo", timeZone: "Africa/Cairo" },
    { displayName: "Johannesburg", timeZone: "Africa/Johannesburg" },
    { displayName: "Istanbul", timeZone: "Europe/Istanbul" },
    { displayName: "Kolkata", timeZone: "Asia/Kolkata" },
    { displayName: "Bangkok", timeZone: "Asia/Bangkok" }
];

export const dateoptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
}
export const timeoptions = {
    hour12: true,
    minute: '2-digit',
    hour: '2-digit'
} 


export function getTime(timeZone) {
    const date = new Date();
    try {
        // Get the hour in the target timeZone
        const cityTime = date.toLocaleTimeString('en-US', { timeZone, ...timeoptions });
        const hours = new Date().toLocaleTimeString('en-US', { timeZone, hour12: false }).split(':')[0]; // Get the hour in 24-hour format
        return { cityTime, hours: parseInt(hours, 10) }; // Return both time and the hour
    } catch (error) {
        console.log(`Invalid time zone: ${timeZone}`);
        return { cityTime: 'Invalid time', hours: null };
    }
}


export function getData(timeZone) {
    const date = new Date();
    try {
        // Pass the timeZone in the options, not as the first argument
        const cityData = date.toLocaleDateString('en-US', { timeZone, ...dateoptions });
        return cityData;
    } catch (error) {
        console.log(`Invalid time zone: ${timeZone}`);
        return 'Invalid date';
    }
}
 