export const getDragonInfo = async () => {
    try {
        const response = await fetch(`https://api.spacex.land/rest/dragons`);
        if (response.status !== 200) return;

        const dragon = await response.json();

        return dragon;

    } catch (error) {
        console.log('___________________ERROR___________________');
        console.log(error);
    }
};
export const getRocketInfo = async () => {
    try {
        const response = await fetch(`https://api.spacex.land/rest/rockets`);
        if (response.status !== 200) return;

        const dragon = await response.json();

        return dragon;

    } catch (error) {
        console.log('___________________ERROR___________________');
        console.log(error);
    }
};
