const calculateCrewWinCount = (data) => {
    const results = {};

    Object.values(data.overall_results).forEach(stage => {
        stage.top_3.forEach(result => {
            const { driver, driver_nationality, co_driver, co_driver_nationality, vehicle, drive_type, place, crew_number } = result;

            // Initialize driver entry if it doesn't exist
            if (!results[driver]) {
                results[driver] = {
                    driver,
                    nationality: driver_nationality,
                    coDriver: co_driver,
                    coNationality: co_driver_nationality,
                    car: vehicle,
                    driveType: drive_type,
                    crewNumber: crew_number,
                    place1: 0,
                    place2: 0,
                    place3: 0,
                };
            }

            if (place === 1) {
                results[driver].place1 += 1;
            } else if (place === 2) {
                results[driver].place2 += 1;
            } else if (place === 3) {
                results[driver].place3 += 1;
            }
        });
    });

    const resultArray = Object.values(results);

    resultArray.sort((a, b) => {
        if (b.place1 !== a.place1) {
            return b.place1 - a.place1;
        } else if (b.place2 !== a.place2) {
            return b.place2 - a.place2;
        } else {
            return b.place3 - a.place3;
        }
    });

    return resultArray;
};

export default calculateCrewWinCount;
