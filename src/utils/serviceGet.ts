const serviceGet = async (url: string, abortController: AbortController) => {
    try {
        const response = await fetch(url, {
            signal: abortController.signal,
        });
    if(response.ok) {
        const data = await response.json();
        return data;
    }
    
    } catch (error) {
        console.log('Error: '+ error)
    }
    
}
export default serviceGet