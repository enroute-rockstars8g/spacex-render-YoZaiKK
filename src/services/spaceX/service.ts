export const getDragonInfo = async () => {
    try {
        const response = await fetch(`https://api.spacex.land/rest/dragons?limit=1
        `);
        if (response.status !== 200) return;
        
        const dragon = await response.json();
        
        return dragon;

    } catch (error) {
        console.log('___________________ERROR___________________');
        console.log(error);
    }
};
