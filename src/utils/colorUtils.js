export const getColorsForSurfaceType = (road_surface) => {
    switch (road_surface.toLowerCase()) {
        case 'snow':
            return {
                backgroundColor: '#E0F7FA',
                borderColor: '#B2EBF2',
            };
        case 'gravel':
            return {
                backgroundColor: '#D7CCC8',
                borderColor: '#A1887F',
            };
        case 'tarmac':
            return {
                backgroundColor: '#CFD8DC',
                borderColor: '#90A4AE',
            };
        default:
            return {
                backgroundColor: '#CFD8DC',
                borderColor: '#90A4AE',
            };
    }
};
