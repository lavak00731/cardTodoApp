export default service = async (url: string) => {
    try {
        const response = await fetch(url);
    if(response.ok) {
        const data = await response.json();
        return data;
    }
    
    } catch (error) {
        console.log('Error: '+ error)
    }
    
}