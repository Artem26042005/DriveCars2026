// Дані про США
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
    if(carPrise >= 50 && carPrise <= 99.99) auctionFee[0] = 1;
    if(carPrise >= 100 && carPrise <= 199.99) auctionFee[0] = 25;
    if(carPrise >= 200 && carPrise <= 299.99) auctionFee[0] = 50;
    if(carPrise >= 300 && carPrise <= 349.99) auctionFee[0] = 75;
    if(carPrise >= 350 && carPrise <= 399.99) auctionFee[0] = 75;
    if(carPrise >= 400 && carPrise <= 449.99) auctionFee[0] = 110;
    if(carPrise >= 450 && carPrise <= 499.99) auctionFee[0] = 110;
    if(carPrise >= 500 && carPrise <= 549.99) auctionFee[0] = 125;
    if(carPrise >= 550 && carPrise <= 599.99) auctionFee[0] = 130;
    if(carPrise >= 600 && carPrise <= 699.99) auctionFee[0] = 140;
    if(carPrise >= 700 && carPrise <= 799.99) auctionFee[0] = 155;
    if(carPrise >= 800 && carPrise <= 899.99) auctionFee[0] = 170;
    if(carPrise >= 900 && carPrise <= 999.99) auctionFee[0] = 185;
    if(carPrise >= 1000 && carPrise <= 1199.99) auctionFee[0] = 200;
    if(carPrise >= 1200 && carPrise <= 1299.99) auctionFee[0] = 225;
    if(carPrise >= 1300 && carPrise <= 1399.99) auctionFee[0] = 240;
    if(carPrise >= 1400 && carPrise <= 1499.99) auctionFee[0] = 250;
    if(carPrise >= 1500 && carPrise <= 1599.99) auctionFee[0] = 260;
    if(carPrise >= 1600 && carPrise <= 1699.99) auctionFee[0] = 275;
    if(carPrise >= 1700 && carPrise <= 1799.99) auctionFee[0] = 285;
    if(carPrise >= 1800 && carPrise <= 1999.99) auctionFee[0] = 300;
    if(carPrise >= 2000 && carPrise <= 2399.99) auctionFee[0] = 325;
    if(carPrise >= 2400 && carPrise <= 2499.99) auctionFee[0] = 335;
    if(carPrise >= 2500 && carPrise <= 2999.99) auctionFee[0] = 350;
    if(carPrise >= 3000 && carPrise <= 3499.99) auctionFee[0] = 400;
    if(carPrise >= 3500 && carPrise <= 3999.99) auctionFee[0] = 455;
    if(carPrise >= 4000 && carPrise <= 4499.99) auctionFee[0] = 600;
    if(carPrise >= 4500 && carPrise <= 4999.99) auctionFee[0] = 625;
    if(carPrise >= 5000 && carPrise <= 5499.99) auctionFee[0] = 625;
    if(carPrise >= 5500 && carPrise <= 5999.99) auctionFee[0] = 625;
    if(carPrise >= 6000 && carPrise <= 6499.99) auctionFee[0] = 675;
    if(carPrise >= 6500 && carPrise <= 6999.99) auctionFee[0] = 675;
    if(carPrise >= 7000 && carPrise <= 7499.99) auctionFee[0] = 675;
    if(carPrise >= 7500 && carPrise <= 7999.99) auctionFee[0] = 690;
    if(carPrise >= 8000 && carPrise <= 8499.99) auctionFee[0] = 715;
    if(carPrise >= 8500 && carPrise <= 8999.99) auctionFee[0] = 715;
    if(carPrise >= 9000 && carPrise <= 9999.99) auctionFee[0] = 715;
    if(carPrise >= 10000 && carPrise <= 10499.99) auctionFee[0] = 720;
    if(carPrise >= 10500 && carPrise <= 10999.99) auctionFee[0] = 720;
    if(carPrise >= 11000 && carPrise <= 11499.99) auctionFee[0] = 720;
    if(carPrise >= 11500 && carPrise <= 11999.99) auctionFee[0] = 720;
    if(carPrise >= 12000 && carPrise <= 12499.99) auctionFee[0] = 720;
    if(carPrise >= 12500 && carPrise <= 14999.99) auctionFee[0] = 720;
    if(carPrise >= 15000) auctionFee[0] = (carPrise * 5.75 / 100);

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

let course = [];
course['USD'] = 41.65;
course['EUR'] = 44.2;
course['UAH'] = 1;
let eurToUSD = 1.054;
let usdToEUR = 1.062;

const calc_USA = document.querySelector(".calculate-wrapper.USA");
const calc_EUROPE = document.querySelector(".calculate-wrapper.Europe");
const calc_EUROPE_OPT = document.querySelector('.calculate-wrapper.Europe-OPT');
const calc_USA_OPT = document.querySelector('.calculate-wrapper.USA-OPT');
const calc_delivery_M = document.querySelector('.calculate-wrapper.delivery-m');
const calc_delivery_L = document.querySelector('.calculate-wrapper.delivery-l');
const calc_delivery_K = document.querySelector('.calculate-wrapper.delivery-k');
const calc_OPEN_LANE = document.querySelector('.calculate-wrapper.OPEN-LANE');
const calc_USA_ELECTRO = document.querySelector('.calculate-wrapper.USA-ELECTRO');

function tabsInit() {
    const tabsItems = document.querySelectorAll('.tabs-wrapper .item');
    tabsItems.forEach((tab, i) => {
        tab.addEventListener('click', () => {
            tabsItems.forEach(item => {item.classList.remove('active')});
            tab.classList.add('active');

            calc_EUROPE.style.display = 'none';
            calc_USA.style.display = 'none';
            calc_EUROPE_OPT.style.display = 'none';
            calc_USA_OPT.style.display = 'none';
            calc_delivery_M.style.display = 'none';
            calc_delivery_L.style.display = 'none';
            calc_delivery_K.style.display = 'none';
            calc_OPEN_LANE.style.display = 'none';
            calc_USA_ELECTRO.style.display = 'none';

            if (i === 0) calc_EUROPE.style.display = 'flex';
            else if (i === 1) calc_USA.style.display = 'flex';
            else if (i === 2) calc_EUROPE_OPT.style.display = 'flex';
            else if (i === 3) calc_USA_OPT.style.display = 'flex';
            else if (i === 4) calc_delivery_M.style.display = 'flex';
            else if (i === 5) calc_delivery_L.style.display = 'flex';
            else if (i === 6) calc_delivery_K.style.display = 'flex';
            else if (i === 7) calc_OPEN_LANE.style.display = 'flex';
            else if (i === 8) calc_USA_ELECTRO.style.display = 'flex';
        })
    })
}

let america_state = 0;
let america_fuel = 0;
let europe_country = 0;
let europe_fuel = 0;
let europe_country_opt = 0;
let europe_fuel_opt = 0;
let europe_auction_opt = 0;
let america_state_OPT = 0;
let america_fuel_OPT = 0;
let america_bodyType_OPT = 0;
let america_certification_OPT = 0;
let america_state_ELECTRO = 0;

let selectInfo = ["USD", "UAH", "EUR"];
let setLabel;

function selects() {
    const selects = document.querySelectorAll('.select-wrapper');
    selects.forEach(select => {
        const label = select.querySelector('.current-label');
        const variables = select.querySelector('.variables');
        const items = variables.querySelectorAll('.item');
        select.addEventListener('click', (e) => {
            if (!e.target.closest('.variables')) {
                e.stopPropagation();
                variables.classList.toggle('active');
            }
        });

        items.forEach((item, i) => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                label.textContent = item.textContent;
                variables.classList.remove('active');
              
                if (variables.classList.contains('state-USA')) america_state = i;
                if (variables.classList.contains('fuel-USA')) america_fuel = i;
                if (variables.classList.contains('country-Europe')) europe_country = i;
                if (variables.classList.contains('fuel-Europe')) europe_fuel = i;
                if (variables.classList.contains('country-Europe-OPT')) europe_country_opt = i;
                if (variables.classList.contains('fuel-Europe-OPT')) europe_fuel_opt = i;
                if (variables.classList.contains('auction-Europe-OPT')) europe_auction_opt = i;
                if (variables.classList.contains('state-USA-OPT')) america_state_OPT = i;
                if (variables.classList.contains('fuel-USA-OPT')) america_fuel_OPT = i;
                if (variables.classList.contains('USA-bodyType-OPT')) america_bodyType_OPT = i;
                if (variables.classList.contains('USA-sertification-OPT')) america_certification_OPT = i;
                if (variables.classList.contains('state-USA-ELECTRO')) america_state_ELECTRO = i;

                if (variables.classList.contains('converter-input')) {
                    selectInfo[0] = item.textContent;
                    setLabel();
                }

                if (variables.classList.contains('converter-output')) {
                    selectInfo[1] = item.textContent;
                    setLabel();
                }
            })
        })
    });
}

function USA() {
    let variables_State = calc_USA.querySelector(".variables.state-USA");
    statesInfo.forEach(item => {
        variables_State.innerHTML += '<div class="item">' + item.state + '</div>';
    });
        
    const variables_items = variables_State.querySelectorAll(".item");
    const inputState = calc_USA.querySelector(".input-state-USA");
    inputState.addEventListener('input', () => {
        variables_items.forEach(item => {
            if (!item.innerText.toLowerCase().includes(inputState.value.toLowerCase())) item.style.display = "none";
            else item.style.display = "block";
        });
    });

    let adress_delivery = false;
    const btn_calc = calc_USA.querySelector(".btn-calc-USA");
    btn_calc.addEventListener('click', () => {
        const l_price_USA = calc_USA.querySelector("#price-USA");
        if (l_price_USA.value == '') { l_price_USA.focus(); return; }

        const l_eng_capacity_USA = calc_USA.querySelector("#engine-capacity-USA");
        if (l_eng_capacity_USA.value == '') { l_eng_capacity_USA.focus(); return; }

        const l_year_USA = calc_USA.querySelector("#year-USA");
        if (l_year_USA.value == '') { l_year_USA.focus(); return; }

        const carPrice = Number(l_price_USA.value);
        const yearRelease = Number(l_year_USA.value);
        const engineCapacity = Number(l_eng_capacity_USA.value);
        let auctionFee = getAuctionAmerica(carPrice);
        const deliveryPort = statesInfo[america_state].price + 150;
        let deliverySea = getContainerPrice(statesInfo[america_state].port) + 600;
        const unloadPort = 400;
        let deliveryKiev = 1400;
        const broker = 250;
        const service = 500;
        const button = 120;
        const clearance = getClearance(carPrice, auctionFee, yearRelease, engineCapacity, america_fuel);
        const priceSwift = (100 + (0.032 * (carPrice + auctionFee)));
        let accompaniment = 0;
        let markUp = 0;

        adress_delivery = calc_USA.querySelector('.switch-address-del input[type="checkbox"]').checked;

        let allPrice = carPrice + auctionFee + deliveryPort + deliverySea + unloadPort + (adress_delivery === true ? 400 : 0) + deliveryKiev + broker + service + accompaniment + button + clearance + priceSwift + markUp;

        if (allPrice >= 9000 && allPrice <= 25000) {
            auctionFee = getAuctionAmerica(carPrice) + 100;
            deliverySea = getContainerPrice(statesInfo[america_state].port) + 800;
            deliveryKiev = 1600;
        } else if (allPrice > 25000 && allPrice <= 55000) {
            auctionFee = getAuctionAmerica(carPrice) + 100;
            deliverySea = getContainerPrice(statesInfo[america_state].port) + 800;
            deliveryKiev = 1600;
            accompaniment = 200;
            markUp = 250;
        } else if (allPrice > 55000) {
            auctionFee = getAuctionAmerica(carPrice) + 100;
            deliverySea = getContainerPrice(statesInfo[america_state].port) + 800;
            deliveryKiev = 1600;
            accompaniment = 200;
            markUp = 750;
        }

        allPrice = carPrice + auctionFee + deliveryPort + deliverySea + unloadPort + deliveryKiev + broker + service + accompaniment + button + clearance + priceSwift + markUp;

        const outputs_USA = calc_USA.querySelector(".card-item.outputs");
        const numerics = outputs_USA.querySelectorAll(".item .numeric");
        const payment_Three = Number(auctionFee) + Number(carPrice) + Number(deliveryPort) + Number(deliverySea) + Number(priceSwift) + 1000;

        numerics[0].innerText = parseFloat((Number(auctionFee) + Number(carPrice)).toFixed(2));
        numerics[1].innerText = parseFloat(Number(broker).toFixed(2));
        numerics[2].innerText = parseFloat(Number(service).toFixed(2));
        numerics[3].innerText = parseFloat(Number(deliveryPort).toFixed(2));
        numerics[4].innerText = parseFloat(Number(deliverySea).toFixed(2));
        numerics[5].innerText = parseFloat(Number(priceSwift).toFixed(2));
        numerics[6].innerText = parseFloat(Number(clearance).toFixed(2));
        numerics[7].innerText = parseFloat(Number(adress_delivery === true ? 200 : 0).toFixed(2));
        numerics[8].innerText = parseFloat(Number(adress_delivery === true ? 200 : 0).toFixed(2));
        numerics[9].innerText = parseFloat(Number(allPrice).toFixed(2));
        numerics[10].innerText = parseFloat(Number(payment_Three).toFixed(2)) + " $";

        setExchangeValue(allPrice.toFixed(2));
    });

    function getClearance(carPrice, auctionFee, yearRelease, engineCapacity, fuelType) {
        if (fuelType === 2) return engineCapacity;
        carPrice = carPrice + auctionFee + 1600;
        let basikExcise = 0;
        if (fuelType == 0) basikExcise = engineCapacity <= 3000 ? 50 : 100;
        else if (fuelType === 1) basikExcise = engineCapacity <= 3500 ? 75 : 150;

        let coeffYear = new Date().getFullYear() - yearRelease;
        if (coeffYear < 1) coeffYear = 1;
        else if (coeffYear > 15) coeffYear = 15;

        const excise = basikExcise * (engineCapacity / 1000) * coeffYear;
        const toll = carPrice * 0.1;
        const pdv = (carPrice + toll + excise) * 0.2;
        return toll + excise + pdv;
    }
}

function EUROPE() {
    let adress_delivery = true;
    let type = 1;

    const collection = [700, 700, 700, 800, 800, 700, 900, 900, 900, 900];
    const crossBorder = [139, 99, 89, 185, 149, 139, 245, 149, 379, 189];
    const processingDocs = [249, 149, 269, 229, 259, 249, 229, 252, 189, 159];

    const btn_calc_Europe_Price = calc_EUROPE.querySelector(".btn-calc-Europe");
    btn_calc_Europe_Price.addEventListener('click', () => {
        const l_price_Europe = calc_EUROPE.querySelector("#price-Europe");
        if (l_price_Europe.value == '') { l_price_Europe.focus(); return; }
        const l_delivery_Europe = calc_EUROPE.querySelector("#delivery-Europe");
        if (l_delivery_Europe.value == '') { l_delivery_Europe.focus(); return; }
        const l_year_Europe = calc_EUROPE.querySelector("#year-Europe");
        if (l_year_Europe.value == '') { l_year_Europe.focus(); return; }
        const l_engine_capacity_Europe = calc_EUROPE.querySelector("#engine-capacity-Europe");
        if (l_engine_capacity_Europe.value == '') { l_engine_capacity_Europe.focus(); return; }

        const priceCar = Number(l_price_Europe.value);
        const priceEurope = Number(l_delivery_Europe.value);
        const priceService = 550;
        const yearRelease = Number(l_year_Europe.value);
        const engineCapacity = Number(l_engine_capacity_Europe.value);
        type = 1;
        calculate_CC(europe_country, priceCar, priceService, priceEurope, yearRelease, engineCapacity, type);
    });

    const btn_calc_Europe_clearance = calc_EUROPE.querySelector(".btn-calc-clearence-Europe");
    btn_calc_Europe_clearance.addEventListener('click', () => {
        const l_price_Europe = calc_EUROPE.querySelector("#price-Europe");
        if (l_price_Europe.value == '') { l_price_Europe.focus(); return; }
        const l_delivery_Europe = calc_EUROPE.querySelector("#delivery-Europe");
        if (l_delivery_Europe.value == '') { l_delivery_Europe.focus(); return; }

        const priceCar = Number(l_price_Europe.value);
        const priceEurope = Number(l_delivery_Europe.value);
        const priceService = 550;
        type = 2;
        calculate_CC(europe_country, priceCar, priceService, priceEurope, 0, 0, type);
    });

    function calculate_CC(country, priceCar, priceService, priceEurope, yearRelease, engineCapacity, type) {
        const priceCarAuction = priceCar + crossBorder[country] + processingDocs[country];
        const broker = 250;
        const certificate = 100;
        const priceColl = collection[country];
        const priceSwift = (100 + (0.032 * (priceCarAuction + priceColl)));
        const buttonCC = calc_EUROPE.querySelector('.switch-button input[type="checkbox"]').checked ? 250 : 0;
        adress_delivery = calc_EUROPE.querySelector('.switch-address-del input[type="checkbox"]').checked;
        const allPriceNoUK = priceCarAuction + priceEurope + broker + certificate + priceService + priceSwift + buttonCC;

        let priceUK = 0;
        if (allPriceNoUK < 4000) priceUK = 1300;
        if (allPriceNoUK > 4000 && allPriceNoUK < 6000) priceUK = 1650;
        if (allPriceNoUK > 6000) priceUK = 1800;

        const fee = (priceCarAuction + priceEurope + priceUK) * 0.005;
        const pliceCarOlso = priceCar + 300 + priceEurope;
        let basikExcise = 0;
        if (europe_fuel == 0) basikExcise = engineCapacity <= 3000 ? 50 : 100;
        else if (europe_fuel === 1) basikExcise = engineCapacity <= 3500 ? 75 : 150;

        let coeffYear = new Date().getFullYear() - yearRelease;
        if (coeffYear < 1) coeffYear = 1;
        else if (coeffYear > 15) coeffYear = 15;

        const excise = basikExcise * (engineCapacity / 1000) * coeffYear;
        const toll = pliceCarOlso * 0.1;
        const pdv = (pliceCarOlso + toll + excise) * 0.2;
        const customsclearance =  type === 1 ? toll + excise + pdv : 0;

        const allPriceCar = allPriceNoUK + priceUK + 100 + fee + customsclearance + (adress_delivery === true ? 400 : 0) + (type === 1 ? 0 : -150);
        const payment_Three = priceCarAuction + priceEurope + priceUK + broker + 350 + priceSwift;
        
        const outputs_EUROPE = calc_EUROPE.querySelector(".card-item.outputs");
        const numerics = outputs_EUROPE.querySelectorAll(".item .numeric");

        numerics[0].innerText = parseFloat((Number(priceCarAuction)).toFixed(2));
        numerics[1].innerText = parseFloat(Number(priceEurope).toFixed(2));
        numerics[2].innerText = parseFloat(Number(priceService).toFixed(2));
        numerics[3].innerText = parseFloat(Number(priceSwift).toFixed(2));
        numerics[4].innerText = parseFloat(Number(customsclearance).toFixed(2));
        numerics[5].innerText = parseFloat(Number(adress_delivery === true ? 200 : 0).toFixed(2));
        numerics[6].innerText = parseFloat(Number(adress_delivery === true ? 200 : 0).toFixed(2));
        numerics[7].innerText = parseFloat(Number(allPriceCar).toFixed(2));
        numerics[8].innerText = parseFloat(Number(payment_Three).toFixed(2)) + " €";

        setExchangeValue(allPriceCar.toFixed(2));
    }
}

function EUROPE_OPT() {
    const crossBorder = [139, 99, 89, 185, 149, 139, 245, 149, 379, 189];
    const processingDocs = [249, 149, 269, 229, 259, 249, 229, 252, 189, 159];

    const btn_calc_Europe_Price_OPT = calc_EUROPE_OPT.querySelector('.btn-calc-Europe-OPT');

    btn_calc_Europe_Price_OPT.addEventListener('click', () => {
        const l_price_Europe = calc_EUROPE_OPT.querySelector("#price-Europe");
        if (l_price_Europe.value == '') { l_price_Europe.focus(); return; }
        const l_delivery_Europe = calc_EUROPE_OPT.querySelector("#delivery-Europe");
        if (l_delivery_Europe.value == '') { l_delivery_Europe.focus(); return; }
        const l_year_Europe = calc_EUROPE_OPT.querySelector("#year-Europe");
        if (l_year_Europe.value == '') { l_year_Europe.focus(); return; }
        const l_engine_capacity_Europe = calc_EUROPE_OPT.querySelector("#engine-capacity-Europe");
        if (l_engine_capacity_Europe.value == '') { l_engine_capacity_Europe.focus(); return; }

        const priceCar = Number(l_price_Europe.value);
        const priceEurope = Number(l_delivery_Europe.value);
        const yearRelease = Number(l_year_Europe.value);
        const engineCapacity = Number(l_engine_capacity_Europe.value);

        calculateCost(priceCar, priceEurope, yearRelease, engineCapacity);
    })

    function calculateCost(priceCarOlso, priceEurope, yearRelease, engineCapacity) {
        const priceDelivery = 450;
        const priceService = 250;
        let broker = 0;
        let documents = 70;
        const priceColl = crossBorder[europe_country_opt] + processingDocs[europe_country_opt] + 30;
        let basikExcise = 0;
        if (europe_fuel_opt == 0) basikExcise = engineCapacity <= 3000 ? 50 : 100;
        else basikExcise = engineCapacity <= 3500 ? 75 : 150;

        let coeffYear = new Date().getFullYear() - yearRelease;
        if (coeffYear < 1) coeffYear = 1;
        else if (coeffYear > 15) coeffYear = 15;

        const excise = basikExcise * (engineCapacity / 1000) * coeffYear;
        const toll = priceCarOlso * 0.1;
        const pdv = (priceCarOlso + toll + excise) * 0.2;
        const customsclearance = toll + excise + pdv;

        let priceSwift = 0;
        if (europe_auction_opt === 0) {
            priceSwift = (25 + (0.03 * priceCarOlso)).toFixed(2);
            broker = 80;
            priceCarOlso += priceColl;
        } else {
            priceSwift = (0.015 * priceCarOlso).toFixed(2);
            broker = 150;
        }
        const priceAll = priceCarOlso + priceDelivery + priceService + priceEurope + broker + documents + customsclearance;
        const payment_Three = Number(priceCarOlso) + Number(priceEurope) + Number(priceDelivery) + Number(priceService) + Number(priceSwift);

        const outputs_EUROPE_OPT = calc_EUROPE_OPT.querySelector(".card-item.outputs");
        const numerics = outputs_EUROPE_OPT.querySelectorAll(".item .numeric");

        numerics[0].innerText = parseFloat((Number(priceCarOlso)).toFixed(2));
        numerics[1].innerText = parseFloat(Number(priceDelivery).toFixed(2));
        numerics[2].innerText = parseFloat(Number(priceEurope).toFixed(2));
        numerics[3].innerText = parseFloat(Number(broker).toFixed(2));
        numerics[4].innerText = parseFloat(Number(priceService).toFixed(2));
        numerics[5].innerText = parseFloat(Number(documents).toFixed(2));
        numerics[6].innerText = parseFloat(Number(customsclearance).toFixed(2));
        numerics[7].innerText = parseFloat(Number(priceAll).toFixed(2));
        numerics[8].innerText = parseFloat(Number(payment_Three).toFixed(2)) + " €";

        setExchangeValue(priceAll.toFixed(2));
    }
}

function USAOPT() {
    let variables_State = calc_USA_OPT.querySelector(".variables.state-USA");
    statesInfo.forEach(item => {
        variables_State.innerHTML += '<div class="item">' + item.state + '</div>';
    });
    const variables_items = variables_State.querySelectorAll(".item");
    const inputState = calc_USA_OPT.querySelector(".input-state-USA");
    inputState.addEventListener('input', () => {
        variables_items.forEach(item => {
            if (!item.innerText.toLowerCase().includes(inputState.value.toLowerCase())) item.style.display = "none";
            else item.style.display = "block";
        });
    });

    const btn_calc_USA_OPT = calc_USA_OPT.querySelector(".btn-calc-USA-OPT");
    btn_calc_USA_OPT.addEventListener('click', () => {
        if (course['USD'] === 0 || course['EUR'] === 0) {
            const settings = document.querySelector('.settings-svg');
            settings.dispatchEvent(new MouseEvent('click', { bubbles: true }));
            return;
        }
        const autoPriceUSA_label = calc_USA_OPT.querySelector("#price-USA");
        if (autoPriceUSA_label.value == '') { autoPriceUSA_label.focus(); return; }
        const engineCapacityUSA_label = calc_USA_OPT.querySelector("#engine-capacity-USA");
        if (engineCapacityUSA_label.value == '') { engineCapacityUSA_label.focus(); return; }
        const yearReleaseUSA_label = calc_USA_OPT.querySelector("#year-USA");
        if (yearReleaseUSA_label.value == '') { yearReleaseUSA_label.focus(); return; }

        let carPrice = Number(autoPriceUSA_label.value);
        let yearRelease = Number(yearReleaseUSA_label.value);
        let engineCapacity = Number(engineCapacityUSA_label.value);
        let certification = america_certification_OPT === 0 ? 0 : 170;

        const unloadPort = 400;
        const deliveryUK = 650;
        const broker = 150;
        const service = 100;
        const auctionFee = getAuctionAmerica(carPrice);
        const deliverySea = getContainerPrice(statesInfo[america_state_OPT].port) + 25 + (america_bodyType_OPT === 1 ? 100 : 0);
        const priceSwift = (100 + (0.02 * (carPrice + auctionFee)));
        const deliveryPort = statesInfo[america_state_OPT].price + 25;
        const clearance = getClearance(carPrice, auctionFee, yearRelease, engineCapacity, america_fuel_OPT);
        const allPrice = carPrice + auctionFee + deliveryPort + deliverySea + unloadPort + deliveryUK + broker + service + clearance + certification + priceSwift;

        const outputs_USA_OPT = calc_USA_OPT.querySelector(".card-item.outputs");
        const numerics = outputs_USA_OPT.querySelectorAll(".item .numeric");

        numerics[0].innerText = parseFloat((Number(auctionFee) + Number(carPrice)).toFixed(2));
        numerics[1].innerText = parseFloat(Number(deliveryPort).toFixed(2));
        numerics[2].innerText = parseFloat(Number(deliverySea).toFixed(2));
        numerics[3].innerText = parseFloat(Number(unloadPort).toFixed(2));
        numerics[4].innerText = parseFloat(Number(deliveryUK).toFixed(2));
        numerics[5].innerText = parseFloat(Number(broker).toFixed(2));
        numerics[6].innerText = parseFloat(Number(service).toFixed(2));
        numerics[7].innerText = parseFloat(Number(clearance).toFixed(2));
        numerics[8].innerText = parseFloat(Number(certification).toFixed(2));
        numerics[9].innerText = parseFloat(Number(allPrice).toFixed(2));
        numerics[10].innerText = parseFloat(Number(0).toFixed(2)) + " €";

        setExchangeValue(allPrice.toFixed(2));
    });

    function getClearance(carPrice, auctionFee, yearRelease, engineCapacity, fuelType) {
        carPrice = carPrice + 1600 + auctionFee;
        let basikExcise = 0;
        if (fuelType == 0) basikExcise = engineCapacity <= 3000 ? 50 : 100;
        else basikExcise = engineCapacity <= 3500 ? 75 : 150;

        let coeffYear = new Date().getFullYear() - yearRelease;
        if (coeffYear < 1) coeffYear = 1;
        else if (coeffYear > 15) coeffYear = 15;

        const excise = ((basikExcise * (engineCapacity / 1000) * coeffYear) * course['EUR']) / course['USD'];
        const toll = carPrice * 0.1;
        const pdv = (carPrice + toll + excise) * 0.2;
        return toll + excise + pdv;
    }
}

function deliveryM() {
    const btnCalcAddressDelivery = calc_delivery_M.querySelector(".btn-del-m");
    btnCalcAddressDelivery.addEventListener('click', () => {
        const delivery_input = calc_delivery_M.querySelector('#distance');
        if (delivery_input.value == '' || delivery_input.value <= 0) { delivery_input.focus(); return; }
        const delivery = Number(delivery_input.value);

        let salaryCourse = 3;
        if (delivery >= 301 && delivery <= 500) salaryCourse = 2.7;
        else if (delivery >= 501 && delivery <= 700) salaryCourse = 2.5;
        else if (delivery >= 701 && delivery <= 1000) salaryCourse = 2.2;
        
        const fuelCost = 0.12;
        const fuelPrice = 50;
        let fuelConsumption = delivery * fuelCost * fuelPrice;
        let salary = Math.min(Math.max(delivery * salaryCourse, 500), 2000);
        const amortization = (fuelConsumption + salary) * 0.007;
        const service = (fuelConsumption + salary) * 0.01;

        const outputs_delivery_M = calc_delivery_M.querySelector(".card-item.outputs");
        const numerics = outputs_delivery_M.querySelectorAll(".item .numeric");

        numerics[0].innerText = parseFloat(Number(fuelConsumption).toFixed(2));
        numerics[1].innerText = parseFloat(Number(salary).toFixed(2));
        numerics[2].innerText = parseFloat(Number(amortization).toFixed(2));
        numerics[3].innerText = parseFloat(Number(service).toFixed(2));
        numerics[4].innerText = parseFloat((Number(fuelConsumption)  + Number(salary) + Number(amortization) + Number(service)).toFixed(2));
    });
}

function deliveryL() {
    const btnCalcAddressDeliveryLogist = calc_delivery_L.querySelector(".btn-del-l");
    btnCalcAddressDeliveryLogist.addEventListener('click', () => {
        const delivery_input = calc_delivery_L.querySelector('#distance');
        if (delivery_input.value == '' || delivery_input.value <= 0) { delivery_input.focus(); return; }
        const delivery = Number(delivery_input.value);

        let salaryCourse = 3;
        if (delivery >= 301 && delivery <= 500) salaryCourse = 2.7;
        else if (delivery >= 501 && delivery <= 700) salaryCourse = 2.5;
        else if (delivery >= 701 && delivery <= 1000) salaryCourse = 2.2;
        
        const fuelCost = 0.135;
        const fuelPrice = 50;

        let fuelConsumption = delivery * fuelCost * fuelPrice;
        let salary = Math.min(Math.max(delivery * salaryCourse, 500), 2000);
        const amortization = (fuelConsumption + salary) * 0.007;
        const service = (fuelConsumption + salary) * 0.01;
        let cost = fuelConsumption + salary + amortization + service;

        if (delivery >= 0 && delivery <= 200) cost += 5500;
        else if (delivery >= 201 && delivery <= 400) cost += 8000;
        else if (delivery >= 401) cost += 12500;

        const outputs_delivery_L = calc_delivery_L.querySelector(".card-item.outputs");
        const numerics = outputs_delivery_L.querySelectorAll(".item .numeric");
        numerics[0].innerText = parseFloat(Number(cost).toFixed(2));
    })
}

function deliveryK() {
    const btnCalcAddressDeliveryDirector = calc_delivery_K.querySelector(".btn-del-k");
    btnCalcAddressDeliveryDirector.addEventListener('click', () => {
        const delivery_input = calc_delivery_K.querySelector('#distance');
        if (delivery_input.value == '' || delivery_input.value <= 0) { delivery_input.focus(); return; }
        const delivery = Number(delivery_input.value);

        let salaryCourse = 3;
        if (delivery >= 301 && delivery <= 500) salaryCourse = 2.7;
        else if (delivery >= 501 && delivery <= 700) salaryCourse = 2.5;
        else if (delivery >= 701 && delivery <= 1000) salaryCourse = 2.2;
        
        const fuelCost = 0.135;
        const fuelPrice = 50;
        let fuelConsumption = delivery * fuelCost * fuelPrice;
        let salary = Math.min(Math.max(delivery * salaryCourse, 500), 2000);
        const amortization = (fuelConsumption + salary) * 0.007;
        const service = (fuelConsumption + salary) * 0.01;

        let cost = fuelConsumption + salary + amortization + service;
        if (delivery >= 0 && delivery <= 200) cost += 5500;
        else if (delivery >= 201 && delivery <= 400) cost += 8000;
        else if (delivery >= 401) cost += 12500;

        const outputs_delivery_K = calc_delivery_K.querySelector(".card-item.outputs");
        const numerics = outputs_delivery_K.querySelectorAll(".item .numeric");

        numerics[0].innerText = parseFloat(Number(fuelConsumption).toFixed(2));
        numerics[1].innerText = parseFloat(Number(salary).toFixed(2));
        numerics[2].innerText = parseFloat(Number(amortization).toFixed(2));
        numerics[3].innerText = parseFloat(Number(service).toFixed(2));
        numerics[4].innerText = parseFloat((Number(fuelConsumption) + Number(salary) + Number(amortization) + Number(service)).toFixed(2));
        numerics[5].innerText = parseFloat(Number(cost).toFixed(2));
    });
}

function OPENLANE() {
    let adress_delivery = true;
    const btnCALC = calc_OPEN_LANE.querySelector('.btn-calc-Open-Lane');

    const inputAdress_Delivery = calc_OPEN_LANE.querySelector('.switch-address-del input[type="checkbox"]');
    inputAdress_Delivery.addEventListener('change', () => {
        const year_input = calc_OPEN_LANE.querySelector("#year-Open-Lane");
        if (year_input.value == '') { year_input.focus(); return; }
        const battery_input = calc_OPEN_LANE.querySelector("#bettery-Open-Lane");
        if (battery_input.value == '') { battery_input.focus(); return; }
        const price_input = calc_OPEN_LANE.querySelector("#price-Open-Lane");
        if (price_input.value == '') { price_input.focus(); return; }

        const priceCar = Number(price_input.value);
        const battery = Number(battery_input.value);
        const year = Number(year_input.value);
        calculate_OL(priceCar, battery, year);
    })

    btnCALC.addEventListener('click', () => {
        const year_input = calc_OPEN_LANE.querySelector("#year-Open-Lane");
        if (year_input.value == '') { year_input.focus(); return; }
        const battery_input = calc_OPEN_LANE.querySelector("#bettery-Open-Lane");
        if (battery_input.value == '') { battery_input.focus(); return; }
        const price_input = calc_OPEN_LANE.querySelector("#price-Open-Lane");
        if (price_input.value == '') { price_input.focus(); return; }

        const priceCar = Number(price_input.value);
        const battery = Number(battery_input.value);
        const year = Number(year_input.value);
        calculate_OL(priceCar, battery, year);
    })

    function calculate_OL(priceCar, battery, year) {
        const deliveryEurope = 655;
        const broker = 250;
        const service = 2150;
        const certification = 100;
        const priceSwift = (100 + (0.032 * (priceCar)));

        adress_delivery = calc_OPEN_LANE.querySelector('.switch-address-del input[type="checkbox"]').checked;
        const allPrice = priceCar + deliveryEurope + broker + service + certification + battery + priceSwift + 100 + (adress_delivery === true ? 400 : 0);

        const outputs_OPEN_LANE = calc_OPEN_LANE.querySelector(".card-item.outputs");
        const numerics = outputs_OPEN_LANE.querySelectorAll(".item .numeric");

        numerics[0].innerText = parseFloat(Number(priceCar).toFixed(2));
        numerics[1].innerText = parseFloat(Number(deliveryEurope).toFixed(2));
        numerics[2].innerText = parseFloat(Number(broker).toFixed(2));
        numerics[3].innerText = parseFloat(Number(service).toFixed(2));
        numerics[4].innerText = parseFloat(Number(certification).toFixed(2));
        numerics[5].innerText = parseFloat(Number(priceSwift).toFixed(2));
        numerics[6].innerText = parseFloat(Number(battery).toFixed(2));
        numerics[7].innerText = parseFloat(Number(adress_delivery === true ? 200 : 0).toFixed(2));
        numerics[8].innerText = parseFloat(Number(adress_delivery === true ? 200 : 0).toFixed(2));
        numerics[9].innerText = parseFloat(Number(allPrice).toFixed(2));
        setExchangeValue(allPrice.toFixed(2));
    }
}

function USAELECTRO() {
    let adress_delivery = true;
    let variables_State = calc_USA_ELECTRO.querySelector(".variables.state-USA-ELECTRO");
    statesInfo.forEach(item => {
        variables_State.innerHTML += '<div class="item">' + item.state + '</div>';
    });
    const variables_items = variables_State.querySelectorAll(".item");
    const inputState = calc_USA_ELECTRO.querySelector(".input-state-USA");
    inputState.addEventListener('input', () => {
        variables_items.forEach(item => {
            if (!item.innerText.toLowerCase().includes(inputState.value.toLowerCase())) item.style.display = "none";
            else item.style.display = "block";
        });
    });

    const inputAdress_Delivery = calc_USA_ELECTRO.querySelector('.switch-address-del input[type="checkbox"]');
    inputAdress_Delivery.addEventListener('change', () => { calculation(); })

    const btn_calc_USA_ELECTRO = calc_USA_ELECTRO.querySelector(".btn-calc-USA-ELECTRO");
    btn_calc_USA_ELECTRO.addEventListener('click', () => { calculation(); });

    function calculation() {
        if (course['USD'] === 0 || course['EUR'] === 0) {
            const settings = document.querySelector('.settings-svg');
            settings.dispatchEvent(new MouseEvent('click', { bubbles: true }));
            return;
        };
        const autoPriceAmerica_label = calc_USA_ELECTRO.querySelector("#price-USA-ELECTRO");
        if (autoPriceAmerica_label.value == '') { autoPriceAmerica_label.focus(); return; }
        const engineCapacityAmerica_label = calc_USA_ELECTRO.querySelector("#bettery-USA-ELECTRO");
        if (engineCapacityAmerica_label.value == '') { engineCapacityAmerica_label.focus(); return; }
        
        let carPrice = Number(autoPriceAmerica_label.value);
        let engineCapacity = Number(engineCapacityAmerica_label.value);

        const unloadPort = 400;
        const deliveryUK = 1100;
        const button = 135;
        const broker = 250;
        const service = 550;
        const auctionFee = getAuctionAmerica(carPrice);
        const deliverySea = getContainerPrice(statesInfo[america_state_ELECTRO].port) + 800;
        const loadAuto = 35;
        const dangerousGoods = 200;
        const priceSwift = (100 + (0.032 * (carPrice + auctionFee)));
        const deliveryPort = statesInfo[america_state_ELECTRO].price + 150;
        const clearance = engineCapacity;
        adress_delivery = calc_USA_ELECTRO.querySelector('.switch-address-del input[type="checkbox"]').checked;

        const fee = (carPrice + auctionFee + deliveryPort + unloadPort + deliverySea + deliveryUK) * 0.005;
        const allPrice = carPrice + auctionFee + deliveryPort + loadAuto + deliverySea + unloadPort + deliveryUK + broker + service + button + clearance + priceSwift + 200 + 250 + 100 + fee + 100 + dangerousGoods + (adress_delivery === true ? 400 : 0);
        const payment_Three = Number(auctionFee) + Number(carPrice) + Number(deliveryPort) + Number(deliverySea) + Number(priceSwift) + 1000;

        const outputs_USA_ELECTRO = calc_USA_ELECTRO.querySelector(".card-item.outputs");
        const numerics = outputs_USA_ELECTRO.querySelectorAll(".item .numeric");

        numerics[0].innerText = parseFloat((Number(auctionFee) + Number(carPrice)).toFixed(2));
        numerics[1].innerText = parseFloat(Number(broker).toFixed(2));
        numerics[2].innerText = parseFloat(Number(service).toFixed(2));
        numerics[3].innerText = parseFloat(Number(deliveryPort).toFixed(2));
        numerics[4].innerText = parseFloat(Number(deliverySea).toFixed(2));
        numerics[5].innerText = parseFloat(Number(priceSwift).toFixed(2));
        numerics[6].innerText = parseFloat(Number(clearance).toFixed(2));
        numerics[7].innerText = parseFloat(Number(dangerousGoods).toFixed(2));
        numerics[8].innerText = parseFloat(Number(adress_delivery === true ? 200 : 0).toFixed(2));
        numerics[9].innerText = parseFloat(Number(adress_delivery === true ? 200 : 0).toFixed(2));
        numerics[10].innerText = parseFloat(Number(allPrice).toFixed(2));
        numerics[11].innerText = parseFloat(Number(payment_Three).toFixed(2)) + " €";
        setExchangeValue(allPrice.toFixed(2));
    }
}

function creditCalculator() {
    const btnOpen = document.querySelectorAll('.btn-open-credit');
    const calcMain = document.querySelector('.calc-credit-wrapper');
    const summEl = calcMain.querySelector('input#summ');
    const percentEl = calcMain.querySelector('input#percent');
    const btnCalc = calcMain.querySelector('.btn-calc');
    const resultEl = calcMain.querySelector('.money-result span');
    const errors = calcMain.querySelector('.errors');
    const btnClose = calcMain.querySelector('.fon');
    const textSpan = calcMain.querySelector('.note span');
    let period = 1;

    btnOpen.forEach(btn => {
        btn.addEventListener('click', () => {
            calcMain.style.display = 'block';
        })
    })

    btnClose.addEventListener('click', () => {
        calcMain.style.display = 'none';
    })

    const selects = calcMain.querySelectorAll('.selects-el');
    selects.forEach((select) => {
        const current = select.querySelector('.select-header');
        const selectBody = select.querySelector('.select-body');
        const items = selectBody.querySelectorAll('.item');

        current.addEventListener('click', () => {
            selectBody.classList.toggle('active');
            if (selectBody.classList.contains('active')) current.style.borderRadius = '5px 5px 0px 0px';
            else current.style.borderRadius = '5px';
        })

        items.forEach((item, i)=> {
            item.addEventListener('click', () => {
                current.querySelector('span').textContent = item.textContent;
                selectBody.classList.remove('active');
                current.style.borderRadius = '5px';
                period = i+1;
            })
        })
    });

    btnCalc.addEventListener('click', () => {
        if (!summEl.value) {
            summEl.focus();
            errors.textContent = 'Введіть суму кредитування!';
            return;
        }
        if (!percentEl.value || Number(percentEl.value) < 0) {
            percentEl.focus();
            errors.textContent = 'Введіть відсоткову ставку!';
            return;
        }
        textSpan.textContent = `Разова комісія: ${(Number(summEl.value) / 100 * Number(percentEl.value)).toFixed(2)}$`;
        const result =`${(((Number(summEl.value) / 100 * Number(percentEl.value)) + Number(summEl.value)) / period).toFixed(2)}$`;
        resultEl.textContent = result;
        errors.textContent = '';
    })
}

function courseInit() {
    function modal() {
        const settingsSVG = document.querySelector('.settings-svg');
        const modal = document.querySelector('.modal-settings');
        const fon = modal.querySelector('.fon');
        const valuesItems = modal.querySelector('.main .values-items');
        const saveCross = modal.querySelector('.main .save-cross');
        const items = valuesItems.querySelectorAll('.item');
        items.forEach(item => {
            const input = item.querySelector('input');
            const id = input.getAttribute('id');
            if (id === 'EUR_USD') input.value = eurToUSD;
            else if (id === 'USD_EUR') input.value = usdToEUR;
            else if (id === 'USD_UAH') input.value = course['USD'];
            else if (id === 'EUR_UAH') input.value = course['EUR'];
        })

        settingsSVG.addEventListener('click', () => { modal.classList.add('active'); });
        fon.addEventListener('click', () => { modal.classList.remove('active'); })

        saveCross.addEventListener('click', () => {
            modal.classList.remove('active');
            items.forEach(item => {
                const input = item.querySelector('input');
                const id = input.getAttribute('id');
                if (id === 'EUR_USD') eurToUSD = Number(input.value);
                else if (id === 'USD_EUR') usdToEUR = Number(input.value);
                else if (id === 'USD_UAH') course['USD'] = Number(input.value);
                else if (id === 'EUR_UAH') course['EUR'] = Number(input.value);
            })

            setExchangeValue(NaN);
            setLabel();
        })
    }

    function converter() {
        const converter = document.querySelector('.converter-wrapper .converter');
        const items = converter.querySelectorAll('.input-item');
        let input = [];
        input[0] = items[0].querySelector('input');
        input[1] = items[1].querySelector('input');

        input[0].addEventListener('input', () => {
            const col = Number(input[0].value);
            if (Number.isNaN(col) || col === undefined) input[0].focus();
            else {
                let value = 0;
                if (selectInfo[0] === "EUR" && selectInfo[1] === "USD") value = col * eurToUSD;
                else if (selectInfo[0] === "USD" && selectInfo[1] === "EUR") value = col / usdToEUR;
                else value = (col * Number(course[selectInfo[0]])) / course[selectInfo[1]];
                input[1].value = value.toFixed(2);
            }
        })
    }

    setLabel = function() {
        const input = document.querySelector('.converter-wrapper .converter .input-item input');
        const courseLabel = document.querySelector('.converter-wrapper .course');

        let value = course[selectInfo[0]] / course[selectInfo[1]];
        if (selectInfo[0] === "EUR" && selectInfo[1] === "USD") value = eurToUSD;
        else if (selectInfo[0] === "USD" && selectInfo[1] === "EUR") value = 1 / usdToEUR;

        courseLabel.innerHTML = `<span class="input-currency">1 ${selectInfo[0]}</span><span>=</span><span class="output-currency">${value.toFixed(2)} ${selectInfo[1]}</span>`;
        
        const inputEvent = new Event('input', {
            bubbles: true,
            cancelable: true
        });
        input.dispatchEvent(inputEvent);
    }

    modal();
    converter();
    setLabel();
}

function setExchangeValue(value) {
    const input = document.querySelector('.converter-wrapper .converter .input-item input');
    if (input) {
        if (value) input.value = value;
        const inputEvent = new Event('input', {
            bubbles: true,
            cancelable: true
        });
        input.dispatchEvent(inputEvent);
    }
}

addEventListener('load', () => {
    tabsInit();
    USA();
    EUROPE();
    EUROPE_OPT();
    USAOPT();
    deliveryM();
    deliveryL();
    deliveryK();
    OPENLANE();
    USAELECTRO();
    creditCalculator();
    selects();
    courseInit();
});
