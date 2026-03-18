const statesInfo = [
    {state: "ABILENE - TX", price: 420, port: 3},
    {state: "ACE - Carson (CA)", price: 345, port: 4},
    {state: "ACE - Perris - CA", price: 310, port: 4},
    {state: "ACE - Perris 2 - CA", price: 310, port: 4},
    {state: "ADELANTO-CA", price: 320, port: 4},
    {state: "AKRON-CANTON (OH)", price: 600, port: 1},
    {state: "ALBANY - NY", price: 325, port: 1},
    {state: "ALBUQUERQUE - NM", price: 770, port: 3},
    {state: "ALDEN NY", price: 545, port: 1},
    {state: "ALTOONA - PA", price: 490, port: 1},
    {state: "AMARILLO - TX", price: 495, port: 3},
    {state: "AMERICAN CANYON CA", price: 545, port: 4},
    {state: "AMSTERDAM NY", price: 420, port: 1},
    {state: "ANAHEIM (CA)", price: 260, port: 4},
    {state: "ANCHORAGE - AK", price: 2570, port: 4},
    {state: "ANDREWS-TX", price: 495, port: 3},
    {state: "ANTELOPE - CA", price: 1270, port: 3},
    {state: "APPLETON - WI", price: 400, port: 5},
    {state: "ARROLIME NV", price: 520, port: 4},
    {state: "ASHEVILLE - NC", price: 420, port: 2},
    {state: "Ashland KY", price: 520, port: 2},
    {state: "ATLANTA EAST - GA", price: 395, port: 2},
    {state: "ATLANTA GA", price: 395, port: 2},
    {state: "ATLANTA NORTH - GA", price: 395, port: 2},
    {state: "ATLANTA SOUTH - GA", price: 395, port: 2},
    {state: "ATLANTA WEST - GA", price: 395, port: 2},
    {state: "AUGUSTA - GA", price: 370, port: 2},
    {state: "AUSTIN - TX", price: 320, port: 3},
    {state: "AVENEL NEW JERSEY (NJ)", price: 245, port: 1},
    {state: "BAKERSFIELD - CA", price: 370, port: 4},
    {state: "BALTIMORE - MD", price: 370, port: 1},
    {state: "BATON ROUGE - LA", price: 395, port: 3},
    {state: "BILLINGS - MT", price: 920, port: 6},
    {state: "BIRMINGHAM - AL", price: 475, port: 2},
    {state: "BISMARCK - ND", price: 1170, port: 5},
    {state: "BOISE-ID", price: 570, port: 6},
    {state: "BOSTON - SHIRLEY - MA", price: 445, port: 1},
    {state: "Bowling Green - KY", price: 460, port: 6},
    {state: "BRIDGEPORT (PA)", price: 345, port: 1},
    {state: "BRIDGETON MO", price: 420, port: 5},
    {state: "Buckhannon MV", price: 620, port: 1},
    {state: "BUFFALO - NY", price: 545, port: 1},
    {state: "Burlington (VT)", price: 670, port: 1},
    {state: "CANDIA - NH", price: 445, port: 1},
    {state: "CARTERSVILLE - GA", price: 370, port: 1},
    {state: "CASPER - WY", price: 1020, port: 5},
    {state: "CENTRAL NEW JERSEY", price: 245, port: 1},
    {state: "CHAMBERSBURG - PA", price: 420, port: 1},
    {state: "CHARLESTON - SC", price: 320, port: 2},
    {state: "CHARLESTON - WV", price: 570, port: 1},
    {state: "CHARLOTTE (NC)", price: 370, port: 2},
    {state: "CHATTANOOGA-TN", price: 520, port: 2},
    {state: "CHICAGO HEIGHTS IL", price: 320, port: 5},
    {state: "CHICAGO NORTH - IL", price: 270, port: 5},
    {state: "CHICAGO SOUTH - IL", price: 270, port: 5},
    {state: "Chicago-West IL", price: 270, port: 5},
    {state: "CHINA GROVE - NC", price: 395, port: 2},
    {state: "CICERO-IN", price: 320, port: 5},
    {state: "CINCINNATI - OH", price: 550, port: 1},
    {state: "CLEARWATER-FL", price: 370, port: 7},
    {state: "Cleveland - OH", price: 650, port: 1},
    {state: "CLEVELAND EAST - OH", price: 650, port: 1},
    {state: "CLEVELAND WEST - OH", price: 650, port: 1},
    {state: "CLEWISTON FL", price: 395, port: 7},
    {state: "COLORADO SPRINGS - CO", price: 720, port: 5},
    {state: "COLTON - CA", price: 280, port: 4},
    {state: "COLUMBIA - MO", price: 420, port: 4},
    {state: "COLUMBIA - SC", price: 290, port: 2},
    {state: "COLUMBUS - OH", price: 600, port: 1},
    {state: "CONCORD - NC", price: 370, port: 2},
    {state: "CORPUS CHRISTI - TX", price: 345, port: 3},
    {state: "CRASHEDTOYS DALLAS - TX", price: 335, port: 3},
    {state: "CUDAHY WI", price: 450, port: 5},
    {state: "CULPEPER - VA", price: 420, port: 1},
    {state: "DALLAS SOUTH - TX", price: 370, port: 3},
    {state: "DALLAS- TX", price: 370, port: 3},
    {state: "DANVILLE - VA", price: 445, port: 2},
    {state: "DAVENPORT - IA", price: 445, port: 5},
    {state: "DAYTON - OH", price: 650, port: 1},
    {state: "DENVER - CO", price: 620, port: 5},
    {state: "DENVER CENTRAL-CO", price: 620, port: 5},
    {state: "DENVER EAST - CO", price: 745, port: 3},
    {state: "DENVER SOUTH - CO", price: 620, port: 5},
    {state: "DES MOINES - IA", price: 380, port: 5},
    {state: "DETROIT - MI", price: 500, port: 5},
    {state: "DOTHAN - AL", price: 500, port: 2},
    {state: "Dream Rides", price: 420, port: 1},
    {state: "DREAM RIDES", price: 520, port: 4},
    {state: "DUNDALK - MD", price: 395, port: 1},
    {state: "DYER-IN", price: 320, port: 5},
    {state: "EARLINGTON-KY", price: 520, port: 5},
    {state: "EAST BAY (CA)", price: 495, port: 4},
    {state: "EAST BETHEL - MN", price: 670, port: 1},
    {state: "EL PASO - TX", price: 520, port: 3},
    {state: "ELDRIDGE - IA", price: 420, port: 5},
    {state: "ELK RIVER MN", price: 445, port: 5},
    {state: "ELKTON – MD", price: 370, port: 1},
    {state: "ENGLISHTOWN (NJ)", price: 245, port: 1},
    {state: "ERIE - PA", price: 595, port: 1},
    {state: "EUGENE - OR", price: 470, port: 6},
    {state: "Eugene OR", price: 870, port: 4},
    {state: "EXETER - RI", price: 395, port: 1},
    {state: "FAIR HAVEN - VT", price: 670, port: 1},
    {state: "FAIRBURN-GA", price: 345, port: 2},
    {state: "FARGO (ND)", price: 970, port: 5},
    {state: "FAYETTEVILLE - AR", price: 520, port: 3},
    {state: "FLINT - MI", price: 500, port: 5},
    {state: "FONTANA - CA", price: 320, port: 4},
    {state: "Fort Myers-FL", price: 420, port: 7},
    {state: "FORT WAYNE - IN", price: 370, port: 5},
    {state: "FORT WORTH NORTH (TX)", price: 395, port: 3},
    {state: "FREDERICKSBURG - VA", price: 420, port: 1},
    {state: "Fredericksburg-South - VA", price: 420, port: 1},
    {state: "FREETOWN - MA", price: 445, port: 1},
    {state: "FREMONT - CA", price: 445, port: 4},
    {state: "FRESNO - CA", price: 420, port: 4},
    {state: "FRUITLAND MD", price: 420, port: 1},
    {state: "FT.PIERCE - FL", price: 270, port: 7},
    {state: "FT.WORTH - TX", price: 345, port: 3},
    {state: "GASTON SC", price: 320, port: 2},
    {state: "GASTONIA-NC", price: 370, port: 2},
    {state: "GLASSBORO EAST - NJ", price: 270, port: 1},
    {state: "GLASSBORO WEST - NJ", price: 300, port: 1},
    {state: "GORHAM - ME", price: 520, port: 1},
    {state: "GRAHAM-WA", price: 370, port: 6},
    {state: "GRAND RAPIDS (MI)", price: 500, port: 5},
    {state: "GREENSBORO (NC)", price: 395, port: 2},
    {state: "GREENVILLE (SC)", price: 320, port: 2},
    {state: "GREER - SC", price: 295, port: 2},
    {state: "GRENADA (MS)", price: 570, port: 2},
    {state: "Gulf Coast (MS)", price: 520, port: 3},
    {state: "HAM LAKE MN", price: 420, port: 5},
    {state: "HAMMOND - IN", price: 270, port: 5},
    {state: "HAMPTON - VA", price: 420, port: 1},
    {state: "HARRISBURG - PA", price: 370, port: 1},
    {state: "HARTFORD - CT", price: 305, port: 1},
    {state: "HARTFORD SPRINGFIELD-CT", price: 305, port: 1},
    {state: "Hartford-South - CT", price: 310, port: 1},
    {state: "HAYWARD - CA", price: 470, port: 4},
    {state: "HELENA-MT", price: 870, port: 6},
    {state: "HIGH DESERT - CA", price: 250, port: 4},
    {state: "HONOLULU - HI", price: 2500, port: 4},
    {state: "HOUSTON - TX", price: 270, port: 3},
    {state: "HOUSTON EAST - TX", price: 300, port: 3},
    {state: "Houston South - TX", price: 300, port: 3},
    {state: "Houston-North - TX", price: 300, port: 3},
    {state: "HUDSON MA", price: 445, port: 1},
    {state: "INDIANAPOLIS - IN", price: 420, port: 5},
    {state: "IONIA - MI", price: 400, port: 5},
    {state: "JACKSON - MS", price: 445, port: 3},
    {state: "JACKSONVILLE EAST - FL", price: 270, port: 2},
    {state: "JACKSONVILLE NORTH -FL", price: 270, port: 2},
    {state: "JACKSONVILLE WEST - FL", price: 270, port: 2},
    {state: "JOBSTOWN NJ", price: 320, port: 1},
    {state: "KANSAS CITY - KS", price: 495, port: 5},
    {state: "Kansas City East - MO", price: 495, port: 5},
    {state: "KINCHELOE - MI", price: 850, port: 5},
    {state: "KNOXVILLE - TN", price: 470, port: 2},
    {state: "LAFAYETTE (LA)", price: 345, port: 3},
    {state: "LANCASTER CA", price: 320, port: 4},
    {state: "LANSING - MI", price: 600, port: 5},
    {state: "LAS VEGAS - NV", price: 520, port: 4},
    {state: "Laurel - MD", price: 420, port: 1},
    {state: "LEXINGTON EAST - KY", price: 445, port: 5},
    {state: "LEXINGTON SC", price: 345, port: 2},
    {state: "LEXINGTON WEST - KY", price: 445, port: 5},
    {state: "LINCOLN - NE", price: 520, port: 5},
    {state: "LITTLE ROCK - AR", price: 495, port: 3},
    {state: "LONG BEACH - CA", price: 220, port: 4},
    {state: "LONG ISLAND - NY", price: 320, port: 1},
    {state: "LONGVIEW - TX", price: 320, port: 3},
    {state: "LOS ANGELES - CA", price: 270, port: 4},
    {state: "Los Angeles South - CA", price: 320, port: 4},
    {state: "LOUISVILLE - KY", price: 495, port: 5},
    {state: "Louisville North - KY", price: 495, port: 5},
    {state: "LUBBOCK - TX", price: 495, port: 3},
    {state: "LUFKIN - TX", price: 295, port: 3},
    {state: "LUMBERTON -NC", price: 345, port: 2},
    {state: "LYMAN - ME", price: 520, port: 1},
    {state: "MACON - GA", price: 320, port: 2},
    {state: "MADISON - WI", price: 325, port: 5},
    {state: "MALVERN PA", price: 245, port: 1},
    {state: "Manchester (NH)", price: 470, port: 1},
    {state: "MARTINEZ - CA", price: 470, port: 4},
    {state: "MCALLEN - TX", price: 380, port: 3},
    {state: "ME - WINDHAM", price: 520, port: 1},
    {state: "MEBANE - NC", price: 370, port: 2},
    {state: "MEMPHIS - TN", price: 495, port: 5},
    {state: "MENTONE - CA", price: 320, port: 4},
    {state: "METRO DC", price: 395, port: 1},
    {state: "MIAMI CENTRAL - FL", price: 270, port: 7},
    {state: "MIAMI NORTH - FL", price: 270, port: 7},
    {state: "MIAMI SOUTH - FL", price: 270, port: 7},
    {state: "MILWAUKEE - WI", price: 350, port: 5},
    {state: "MILWAUKEE NORTH - WI", price: 350, port: 5},
    {state: "MILWAUKEE SOUTH - WI", price: 350, port: 5},
    {state: "MINNEAPOLIS - MN", price: 420, port: 5},
    {state: "MINNEAPOLIS NORTH - MN", price: 420, port: 5},
    {state: "MISSOULA(MT)", price: 770, port: 6},
    {state: "MOBILE - AL", price: 450, port: 2},
    {state: "MOCKSVILLE - NC", price: 370, port: 2},
    {state: "MODESTO CA", price: 520, port: 3},
    {state: "MONTGOMERY - AL", price: 475, port: 2},
    {state: "NASHVILLE - TN", price: 470, port: 2},
    {state: "NEW BRITAIN CT", price: 305, port: 1},
    {state: "NEW CASTLE - WY", price: 370, port: 1},
    {state: "NEW ORLEANS - LA", price: 470, port: 2},
    {state: "New Orleans East - LA", price: 470, port: 3},
    {state: "NEWBURGH - NY", price: 320, port: 1},
    {state: "NORTH BOSTON - MA", price: 445, port: 1},
    {state: "NORTH CHARLESTON", price: 295, port: 2},
    {state: "NORTH HOLYWOOD - СА", price: 270, port: 4},
    {state: "NORTH SEATTLE-WA", price: 320, port: 6},
    {state: "NORTHERN VIRGINIA (VA)", price: 470, port: 1},
    {state: "OCALA - FL", price: 345, port: 7},
    {state: "OGDEN- UT", price: 470, port: 4},
    {state: "OKLAHOMA CITY - OK", price: 595, port: 3},
    {state: "OMAHA (NE)", price: 445, port: 5},
    {state: "ORLANDO - FL", price: 345, port: 7},
    {state: "ORLANDO NORTH - FL", price: 295, port: 7},
    {state: "ORLANDO SOUTH - FL", price: 370, port: 2},
    {state: "Orleans - VT", price: 620, port: 1},
    {state: "Paducah - KY", price: 495, port: 5},
    {state: "PASCO - WA", price: 470, port: 6},
    {state: "PENNSBURG PA", price: 320, port: 1},
    {state: "PENSACOLA (FL)", price: 495, port: 7},
    {state: "Pensacola FL", price: 445, port: 2},
    {state: "PEORIA-IL", price: 345, port: 5},
    {state: "Permian Basin - TX", price: 520, port: 3},
    {state: "PHILADELPHIA - PA", price: 300, port: 1},
    {state: "PHILADELPHIA EAST", price: 300, port: 1},
    {state: "PHILADELPHIA EAST - SUBLOT - PA", price: 270, port: 1},
    {state: "PHOENIX - AZ", price: 420, port: 4},
    {state: "PITTSBURG SOUTH - PA", price: 545, port: 1},
    {state: "PITTSBURGH EAST - PA", price: 545, port: 1},
    {state: "PITTSBURGH NORTH - PA", price: 545, port: 1},
    {state: "PITTSBURGH WEST - PA", price: 545, port: 1},
    {state: "Port Murray - NJ", price: 320, port: 1},
    {state: "Portage WI", price: 425, port: 5},
    {state: "PORTLAND (OR)", price: 470, port: 6},
    {state: "PORTLAND GORHAM (ME)", price: 520, port: 1},
    {state: "PORTLAND NORTH - OR", price: 470, port: 6},
    {state: "PORTLAND SOUTH - OR", price: 470, port: 6},
    {state: "Providence - RI", price: 445, port: 1},
    {state: "PULASKI - TN", price: 520, port: 1},
    {state: "PUNTA GORDA - FL", price: 320, port: 7},
    {state: "PUYALLUP (WA)", price: 300, port: 6},
    {state: "RALEIGH - NC", price: 370, port: 2},
    {state: "RALEIGH NORTH-NC", price: 395, port: 2},
    {state: "RANCHO CUCAMONGA - CA", price: 270, port: 4},
    {state: "RAPID CITY - SD", price: 720, port: 5},
    {state: "REDDING - CA", price: 595, port: 4},
    {state: "RENO - NV", price: 620, port: 4},
    {state: "RICHMOND - VA", price: 470, port: 1},
    {state: "RICHMOND EAST-VA", price: 470, port: 1},
    {state: "Roanoke (VA)", price: 520, port: 1},
    {state: "ROCHESTER - NY", price: 470, port: 1},
    {state: "RUTLAND - VT", price: 670, port: 1},
    {state: "SACRAMENTO - CA", price: 445, port: 4},
    {state: "SAINT LOUIS MO", price: 420, port: 5},
    {state: "SALT LAKE CITY - UT", price: 545, port: 4},
    {state: "SAN ANTONIO - TX", price: 345, port: 3},
    {state: "San Antonio-South - TX", price: 345, port: 3},
    {state: "SAN BERNARDINO- CA", price: 270, port: 4},
    {state: "SAN DIEGO - CA", price: 370, port: 4},
    {state: "SAN JOSE - CA", price: 495, port: 4},
    {state: "SAN MARTIN-CA", price: 470, port: 4},
    {state: "SANTA PAULA CA", price: 270, port: 4},
    {state: "SAVANNAH - GA", price: 195, port: 2},
    {state: "SAYREVILLE (NJ)", price: 270, port: 1},
    {state: "SCRANTON - PA", price: 345, port: 1},
    {state: "Scranton PA", price: 345, port: 1},
    {state: "SEAFORD - DE", price: 370, port: 1},
    {state: "SEATTLE (WA)", price: 220, port: 6},
    {state: "SHADY SPRING-VW", price: 545, port: 2},
    {state: "SHREVEPORT - LA", price: 345, port: 3},
    {state: "SIKESTON - MO", price: 495, port: 5},
    {state: "SIOUX FALLS (SD)", price: 645, port: 5},
    {state: "SO SACRAMENTO - CA", price: 495, port: 4},
    {state: "SOMERVILLE - NJ", price: 245, port: 1},
    {state: "SOUTH BEND (IN)", price: 370, port: 5},
    {state: "SOUTH BOSTON - MA", price: 420, port: 1},
    {state: "SOUTHERN ILLINOIS - IL", price: 545, port: 5},
    {state: "SOUTHERN NEW JERSEY", price: 345, port: 1},
    {state: "SPANAWAY WA", price: 295, port: 6},
    {state: "SPARTANBURG - SC", price: 370, port: 2},
    {state: "Specialty Division IL", price: 420, port: 5},
    {state: "SPOKANE - WA", price: 420, port: 6},
    {state: "SPRINGFIELD - MO", price: 520, port: 5},
    {state: "ST. CLOUD - MN", price: 495, port: 5},
    {state: "ST. LOUIS - MO", price: 420, port: 5},
    {state: "STATEN ISLAND NY", price: 320, port: 1},
    {state: "Suffolk VA", price: 445, port: 1},
    {state: "SUN VALLEY - CA", price: 270, port: 4},
    {state: "SYRACUSE - NY", price: 390, port: 1},
    {state: "TALLAHASSEE - FL", price: 395, port: 2},
    {state: "Tampa - FL", price: 400, port: 2},
    {state: "Tampa North - FL", price: 400, port: 2},
    {state: "TAMPA SOUTH - FL", price: 400, port: 2},
    {state: "TANNER - AL", price: 500, port: 2},
    {state: "TAUNTON (MA)", price: 445, port: 1},
    {state: "TAYLOR TX", price: 395, port: 3},
    {state: "TEMPLETON (MA)", price: 420, port: 1},
    {state: "THONOTOSASSA FL", price: 420, port: 7},
    {state: "TIDEWATER (VA)", price: 470, port: 1},
    {state: "TIFTON - GA", price: 320, port: 2},
    {state: "TRENTON - NJ", price: 295, port: 1},
    {state: "TUCSON - AZ", price: 445, port: 4},
    {state: "TULSA - OK", price: 595, port: 3},
    {state: "VALLEJO - CA", price: 520, port: 4},
    {state: "VAN NUYS - CA", price: 270, port: 4},
    {state: "WACO - TX", price: 370, port: 3},
    {state: "WALTON - KY", price: 420, port: 4},
    {state: "WASHINGTON DC - MD", price: 395, port: 1},
    {state: "WAYLAND - MI", price: 450, port: 5},
    {state: "WEST MIFFLIN PA", price: 570, port: 1},
    {state: "WEST PALM BEACH - FL", price: 270, port: 7},
    {state: "WEST WARREN MA", price: 395, port: 1},
    {state: "Western Colorado - CO", price: 720, port: 5},
    {state: "WHEELING IL", price: 245, port: 5},
    {state: "WHITE MARSH MD", price: 420, port: 1},
    {state: "WICHITA - KS", price: 620, port: 3},
    {state: "Wilmington (NC)", price: 420, port: 2},
    {state: "WINDHAM (ME)", price: 520, port: 1},
    {state: "YORK HAVEN - PA", price: 370, port: 1},
    {state: "Calgary CA (Copart)", price: 1600, port: 8},
    {state: "Calgary CA (Impact)", price: 1500, port: 8},
    {state: "Edmonton CA (Copart)", price: 1600, port: 8},
    {state: "Edmonton CA (Impact)", price: 1500, port: 8},
    {state: "Halifax CA (Copart)", price: 1250, port: 8},
    {state: "Halifax CA (Impact)", price: 825, port: 8},
    {state: "Hamilton (CANADA)", price: 510, port: 8},
    {state: "Kenora", price: 1100, port: 8},
    {state: "London (CANADA)", price: 550, port: 8},
    {state: "Manitoba", price: 1200, port: 8},
    {state: "Moncton CA (Copart)", price: 1325, port: 8},
    {state: "MONCTON CA (Impact)", price: 725, port: 8},
    {state: "Montreal CA (Copart)", price: 600, port: 8},
    {state: "Montreal CA (Impact)", price: 250, port: 8},
    {state: "Ottawa CA (Copart)", price: 600, port: 8},
    {state: "Ottawa CA (Impact)", price: 325, port: 8},
    {state: "QUEBEC CITI CA (Copart)", price: 600, port: 8},
    {state: "QUEBEC CITY CA (Impact)", price: 350, port: 8},
    {state: "Rivieredu LOUP/QC CA (Copart)", price: 1200, port: 8},
    {state: "Rivieredu Loup/QC CA (Impact)", price: 750, port: 8},
    {state: "Saskatoon (CANADA)", price: 1500, port: 8},
    {state: "St Filibere/QC (CANADA)", price: 600, port: 8},
    {state: "ST JOHNS CA (Copart)", price: 2100, port: 8},
    {state: "St Johns Newfoundland CA (Impact)", price: 1500, port: 8},
    {state: "Stouffville", price: 450, port: 8},
    {state: "Sudbury (CANADA)", price: 750, port: 8},
    {state: "Toronto (CANADA)", price: 600, port: 8},
    {state: "Vancouver (CANADA)", price: 2150, port: 8},
    {state: "Winchester CA (Copart)", price: 600, port: 8},
    {state: "Winchester CA (Impact)", price: 325, port: 8},
    {state: "Winnipeg", price: 1500, port: 8}
];

function getContainerPrice(sity) {
    let price = 0;
    if (sity == 1) price = 650;
    if (sity == 2) price = 700;
    if (sity == 3) price = 800;
    if (sity == 4) price = 1200;
    if (sity == 5) price = 850;
    if (sity == 6) price = 750;
    if (sity == 7) price = 1350;
    if (sity == 8) price = 1200;
    return price;
}

function getAuctionAmerica(carPrise) {
    let auctionFee = [0, 0];
    if (carPrise >= 0 && carPrise <= 49.99) auctionFee[0] = 1;
    if (carPrise >= 50 && carPrise <= 99.99) auctionFee[0] = 1;
    if (carPrise >= 100 && carPrise <= 199.99) auctionFee[0] = 25;
    if (carPrise >= 200 && carPrise <= 299.99) auctionFee[0] = 50;
    if (carPrise >= 300 && carPrise <= 349.99) auctionFee[0] = 75;
    if (carPrise >= 350 && carPrise <= 399.99) auctionFee[0] = 75;
    if (carPrise >= 400 && carPrise <= 449.99) auctionFee[0] = 110;
    if (carPrise >= 450 && carPrise <= 499.99) auctionFee[0] = 110;
    if (carPrise >= 500 && carPrise <= 549.99) auctionFee[0] = 125;
    if (carPrise >= 550 && carPrise <= 599.99) auctionFee[0] = 130;
    if (carPrise >= 600 && carPrise <= 699.99) auctionFee[0] = 140;
    if (carPrise >= 700 && carPrise <= 799.99) auctionFee[0] = 155;
    if (carPrise >= 800 && carPrise <= 899.99) auctionFee[0] = 170;
    if (carPrise >= 900 && carPrise <= 999.99) auctionFee[0] = 185;
    if (carPrise >= 1000 && carPrise <= 1199.99) auctionFee[0] = 200;
    if (carPrise >= 1200 && carPrise <= 1299.99) auctionFee[0] = 225;
    if (carPrise >= 1300 && carPrise <= 1399.99) auctionFee[0] = 240;
    if (carPrise >= 1400 && carPrise <= 1499.99) auctionFee[0] = 250;
    if (carPrise >= 1500 && carPrise <= 1599.99) auctionFee[0] = 260;
    if (carPrise >= 1600 && carPrise <= 1699.99) auctionFee[0] = 275;
    if (carPrise >= 1700 && carPrise <= 1799.99) auctionFee[0] = 285;
    if (carPrise >= 1800 && carPrise <= 1999.99) auctionFee[0] = 300;
    if (carPrise >= 2000 && carPrise <= 2399.99) auctionFee[0] = 325;
    if (carPrise >= 2400 && carPrise <= 2499.99) auctionFee[0] = 335;
    if (carPrise >= 2500 && carPrise <= 2999.99) auctionFee[0] = 350;
    if (carPrise >= 3000 && carPrise <= 3499.99) auctionFee[0] = 400;
    if (carPrise >= 3500 && carPrise <= 3999.99) auctionFee[0] = 455;
    if (carPrise >= 4000 && carPrise <= 4499.99) auctionFee[0] = 600;
    if (carPrise >= 4500 && carPrise <= 4999.99) auctionFee[0] = 625;
    if (carPrise >= 5000 && carPrise <= 5499.99) auctionFee[0] = 625;
    if (carPrise >= 5500 && carPrise <= 5999.99) auctionFee[0] = 625;
    if (carPrise >= 6000 && carPrise <= 6499.99) auctionFee[0] = 675;
    if (carPrise >= 6500 && carPrise <= 6999.99) auctionFee[0] = 675;
    if (carPrise >= 7000 && carPrise <= 7499.99) auctionFee[0] = 675;
    if (carPrise >= 7500 && carPrise <= 7999.99) auctionFee[0] = 690;
    if (carPrise >= 8000 && carPrise <= 8499.99) auctionFee[0] = 715;
    if (carPrise >= 8500 && carPrise <= 8999.99) auctionFee[0] = 715;
    if (carPrise >= 9000 && carPrise <= 9999.99) auctionFee[0] = 715;
    if (carPrise >= 10000 && carPrise <= 10499.99) auctionFee[0] = 720;
    if (carPrise >= 10500 && carPrise <= 10999.99) auctionFee[0] = 720;
    if (carPrise >= 11000 && carPrise <= 11499.99) auctionFee[0] = 720;
    if (carPrise >= 11500 && carPrise <= 11999.99) auctionFee[0] = 720;
    if (carPrise >= 12000 && carPrise <= 12499.99) auctionFee[0] = 720;
    if (carPrise >= 12500 && carPrise <= 14999.99) auctionFee[0] = 720;
    if (carPrise >= 15000) auctionFee[0] = (carPrise * 5.75 / 100);

    if (carPrise >= 0 && carPrise <= 99.99) auctionFee[1] = 0;
    if (carPrise >= 100 && carPrise <= 499.99) auctionFee[1] = 49;
    if (carPrise >= 500 && carPrise <= 999.99) auctionFee[1] = 59;
    if (carPrise >= 1000 && carPrise <= 1499.99) auctionFee[1] = 79;
    if (carPrise >= 1500 && carPrise <= 1999.99) auctionFee[1] = 89;
    if (carPrise >= 2000 && carPrise <= 3999.99) auctionFee[1] = 99;
    if (carPrise >= 4000 && carPrise <= 5999.99) auctionFee[1] = 109;
    if (carPrise >= 6000 && carPrise <= 7999.99) auctionFee[1] = 139;
    if (carPrise >= 8000) auctionFee[1] = 149;

    return auctionFee[0] + auctionFee[1] + 10 + 50 + 69;
}

function formatNumber(num) {
  return Number(num).toFixed(2).replace(/\.00$/, '.00');
}

function setText(id, value, suffix = '') {
  const elements = document.querySelectorAll(`#${CSS.escape(id)}`);
  elements.forEach((element) => {
    element.textContent = `${formatNumber(value)}${suffix}`;
  });
}

function renderBreakdown(values) {
  Object.entries(values).forEach(([key, config]) => {
    setText(key, config.value, config.suffix || '');
  });
}

function populateStates() {
  const select = document.getElementById('state-USA');
  select.innerHTML = '';
  statesInfo.forEach((item, index) => {
    const option = document.createElement('option');
    option.value = String(index);
    option.textContent = item.state;
    select.appendChild(option);
  });
  select.value = '0';
}

function filterStates() {
  const query = document.getElementById('state-USA-search').value.trim().toLowerCase();
  const select = document.getElementById('state-USA');
  const currentValue = select.value;
  select.innerHTML = '';

  statesInfo.forEach((item, index) => {
    if (!item.state.toLowerCase().includes(query)) return;
    const option = document.createElement('option');
    option.value = String(index);
    option.textContent = item.state;
    select.appendChild(option);
  });

  if ([...select.options].some(opt => opt.value === currentValue)) {
    select.value = currentValue;
  } else if (select.options.length > 0) {
    select.selectedIndex = 0;
  }
}

function getClearanceUSA(carPrice, auctionFee, yearRelease, engineCapacity, fuelType) {
    if (fuelType === 2) return engineCapacity;
    carPrice = carPrice + auctionFee + 1600;
    let basikExcise = 0;
    if (fuelType == 0) {
        if (engineCapacity <= 3000) basikExcise = 50;
        else basikExcise = 100;
    } else if (fuelType === 1) {
        if (engineCapacity <= 3500) basikExcise = 75;
        else basikExcise = 150;
    }

    let coeffYear = 2024 - yearRelease;
    if (coeffYear < 1) coeffYear = 1;
    else if (coeffYear > 15) coeffYear = 15;

    const excise = basikExcise * (engineCapacity / 1000) * coeffYear;
    const toll = carPrice * 0.1;
    const pdv = (carPrice + toll + excise) * 0.2;
    return toll + excise + pdv;
}

function getDynamicMarkupUSA(carPrice) {
  const base = 2000 + 175 + 350 + 100;
  let factor = 1;
  if (carPrice <= 3000) factor = 0.82;
  else if (carPrice <= 7000) factor = 0.90;
  else if (carPrice <= 12000) factor = 1.00;
  else if (carPrice <= 20000) factor = 1.08;
  else if (carPrice <= 30000) factor = 1.16;
  else factor = 1.24;
  return +(base * factor).toFixed(2);
}

function getDynamicMarkupEurope(carPrice) {
  const base = 2000 + 125 + 300 + 100;
  let factor = 1;
  if (carPrice <= 5000) factor = 0.85;
  else if (carPrice <= 10000) factor = 0.95;
  else if (carPrice <= 18000) factor = 1.00;
  else if (carPrice <= 28000) factor = 1.08;
  else if (carPrice <= 40000) factor = 1.15;
  else factor = 1.22;
  return +(base * factor).toFixed(2);
}

function distributeMarkup(totalMarkup, weights) {
  const keys = Object.keys(weights);
  const result = {};
  let allocated = 0;
  keys.forEach((key, index) => {
    const value = index === keys.length - 1
      ? totalMarkup - allocated
      : +(totalMarkup * weights[key]).toFixed(2);
    result[key] = value;
    allocated += value;
  });
  return result;
}

function calcUSA() {
  const priceEl = document.getElementById('price-USA');
  const engineEl = document.getElementById('engine-capacity-USA');
  const yearEl = document.getElementById('year-USA');
  const stateSelect = document.getElementById('state-USA');
  const fuelSelect = document.getElementById('fuel-USA');

  if (priceEl.value === '') return priceEl.focus();
  if (engineEl.value === '') return engineEl.focus();
  if (yearEl.value === '') return yearEl.focus();
  if (stateSelect.value === '') return document.getElementById('state-USA-search').focus();

  const carPrice = Number(priceEl.value);
  const yearRelease = Number(yearEl.value);
  const engineCapacity = Number(engineEl.value);
  const americaFuel = Number(fuelSelect.value);
  const americaState = Number(stateSelect.value);
  const adressDelivery = document.getElementById('usa-address-delivery').checked;

  const auctionFeeBase = getAuctionAmerica(carPrice);
  const deliveryPortBase = statesInfo[americaState].price;
  const deliverySeaBase = getContainerPrice(statesInfo[americaState].port);
  const unloadPortBase = 400;
  const deliveryUkraineBase = 1200 + (adressDelivery ? 400 : 0);
  const brokerBase = 250;
  const swiftBase = 100 + (0.032 * (carPrice + auctionFeeBase));
  const clearance = getClearanceUSA(carPrice, auctionFeeBase, yearRelease, engineCapacity, americaFuel);

  const hiddenMarkupTotal = getDynamicMarkupUSA(carPrice);
  const markup = distributeMarkup(hiddenMarkupTotal, {
    lot: 0.20,
    port: 0.18,
    sea: 0.18,
    unload: 0.12,
    ukr: 0.16,
    broker: 0.08,
    swift: 0.08,
  });

  const lotAuction = carPrice + auctionFeeBase + markup.lot;
  const deliveryPort = deliveryPortBase + markup.port;
  const deliverySea = deliverySeaBase + markup.sea;
  const unloadPort = unloadPortBase + markup.unload;
  const deliveryUkraine = deliveryUkraineBase + markup.ukr;
  const broker = brokerBase + markup.broker;
  const swift = swiftBase + markup.swift;

  const allPrice = lotAuction + deliveryPort + deliverySea + unloadPort + deliveryUkraine + broker + swift + clearance;
  const paymentThree = lotAuction + deliveryPort + deliverySea + unloadPort + swift;

  renderBreakdown({
    'usa-out-lot': { value: lotAuction, suffix: ' $' },
    'usa-out-port': { value: deliveryPort, suffix: ' $' },
    'usa-out-sea': { value: deliverySea, suffix: ' $' },
    'usa-out-unload': { value: unloadPort, suffix: ' $' },
    'usa-out-ukr': { value: deliveryUkraine, suffix: ' $' },
    'usa-out-broker': { value: broker, suffix: ' $' },
    'usa-out-swift': { value: swift, suffix: ' $' },
    'usa-out-clearance': { value: clearance, suffix: ' $' },
    'usa-out-total': { value: allPrice },
    'usa-out-pay': { value: paymentThree, suffix: ' $' },
  });
}

function calculateEurope(type) {
  const priceEl = document.getElementById('price-Europe');
  const deliveryEl = document.getElementById('delivery-Europe');
  const yearEl = document.getElementById('year-Europe');
  const engineEl = document.getElementById('engine-capacity-Europe');
  const country = Number(document.getElementById('country-Europe').value);
  const europeFuel = Number(document.getElementById('fuel-Europe').value);

  if (priceEl.value === '') return priceEl.focus();
  if (deliveryEl.value === '') return deliveryEl.focus();
  if (type === 1 && yearEl.value === '') return yearEl.focus();
  if (type === 1 && engineEl.value === '') return engineEl.focus();

  const priceCar = Number(priceEl.value);
  const localDeliveryEurope = Number(deliveryEl.value);
  const yearRelease = type === 1 ? Number(yearEl.value) : 0;
  const engineCapacity = type === 1 ? Number(engineEl.value) : 0;
  const adressDelivery = document.getElementById('eu-address-delivery').checked;
  const buttonCC = document.getElementById('eu-button').checked ? 250 : 0;

  const collection = [700, 700, 700, 800, 800, 700, 900, 900, 900, 900];
  const crossBorder = [139, 99, 89, 185, 149, 139, 245, 149, 379, 189];
  const processingDocs = [249, 149, 269, 229, 259, 249, 229, 252, 189, 159];

  const lotAuctionBase = priceCar + crossBorder[country] + processingDocs[country];
  const deliveryUkraineBase = 1200 + localDeliveryEurope + (adressDelivery ? 400 : 0) + buttonCC;
  const brokerBase = 250;
  const certificateBase = 150;
  const swiftBase = 100 + (0.032 * (lotAuctionBase + collection[country]));

  const hiddenMarkupTotal = getDynamicMarkupEurope(priceCar);
  const markup = distributeMarkup(hiddenMarkupTotal, {
    lot: 0.30,
    ukr: 0.28,
    broker: 0.12,
    certificate: 0.15,
    swift: 0.15,
  });

  const lotAuction = lotAuctionBase + markup.lot;
  const deliveryUkraine = deliveryUkraineBase + markup.ukr;
  const broker = brokerBase + markup.broker;
  const certificate = certificateBase + markup.certificate;
  const swift = swiftBase + markup.swift;

  const pliceCarOlso = priceCar + 300 + localDeliveryEurope;
  let basikExcise = 0;
  if (europeFuel == 0) {
      if (engineCapacity <= 3000) basikExcise = 50;
      else basikExcise = 100;
  } else if (europeFuel === 1) {
      if (engineCapacity <= 3500) basikExcise = 75;
      else basikExcise = 150;
  } else if (europeFuel === 2) {
      basikExcise = 0;
  }

  let coeffYear = 2024 - yearRelease;
  if (coeffYear < 1) coeffYear = 1;
  else if (coeffYear > 15) coeffYear = 15;

  const excise = basikExcise * (engineCapacity / 1000) * coeffYear;
  const toll = pliceCarOlso * 0.1;
  const pdv = (pliceCarOlso + toll + excise) * 0.2;
  const customsclearance = type === 1 ? toll + excise + pdv : 0;

  const allPriceCar = lotAuction + deliveryUkraine + broker + certificate + swift + customsclearance;
  const paymentThree = lotAuction + deliveryUkraine + broker + certificate + swift;

  renderBreakdown({
    'eu-out-lot': { value: lotAuction, suffix: ' €' },
    'eu-out-ukr': { value: deliveryUkraine, suffix: ' €' },
    'eu-out-broker': { value: broker, suffix: ' €' },
    'eu-out-certificate': { value: certificate, suffix: ' €' },
    'eu-out-swift': { value: swift, suffix: ' €' },
    'eu-out-clearance': { value: customsclearance, suffix: ' €' },
    'eu-out-total': { value: allPriceCar },
    'eu-out-pay': { value: paymentThree, suffix: ' €' },
  });
}

function initTabs() {
  const buttons = document.querySelectorAll('.tab-btn');
  const tabs = document.querySelectorAll('.calculate-wrapper');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(item => item.classList.remove('active'));
      tabs.forEach(tab => tab.classList.remove('active'));
      button.classList.add('active');
      document.getElementById(`tab-${button.dataset.tab}`).classList.add('active');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  populateStates();
  initTabs();
  document.getElementById('state-USA-search').addEventListener('input', filterStates);
  document.getElementById('btn-calc-USA').addEventListener('click', calcUSA);
  document.getElementById('btn-calc-Europe').addEventListener('click', () => calculateEurope(1));
  document.getElementById('btn-calc-clearence-Europe').addEventListener('click', () => calculateEurope(2));
});
