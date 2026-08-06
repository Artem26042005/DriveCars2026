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

const CALCULATOR_PASSWORD = 'DriveCars2026';
const ADMIN_PASSWORD = 'DriveCarsAdmin2026';
const DEFAULT_SETTINGS = Object.freeze({
  usaMinProfit: 2675,
  usaProfitPercent: 15,
  euMinProfit: 1675,
  euProfitPercent: 15,
  seaFirstPercent: 50,
  usaLandExtra: 200,
  seaExtra: 200,
  swiftPercent: 2.5,
  klaipedaLutsk: 850,
  europeLutsk: 550,
  broker: 250,
  usaService: 200,
  euService: 200,
  certificate: 100,
  unloadPort: 400
});

const EUROPE_COUNTRIES = [
  {code:'AT', name:'Австрія', fee:309}, {code:'BE', name:'Бельгія', fee:299},
  {code:'DE', name:'Німеччина', fee:299}, {code:'DK', name:'Данія', fee:279},
  {code:'ES', name:'Іспанія', fee:279}, {code:'FI', name:'Фінляндія', fee:249},
  {code:'FR', name:'Франція', fee:319}, {code:'IT', name:'Італія', fee:239},
  {code:'NL', name:'Нідерланди', fee:279}, {code:'PL', name:'Польща', fee:179},
  {code:'PT', name:'Португалія', fee:209}, {code:'SE', name:'Швеція', fee:302}
];

let settings = loadSettings();
let americaState = 0;
let americaFuel = 0;
let europeCountry = 2;
let europeFuel = 0;
let usaMode = 'with';
let europeMode = 'with';

function loadSettings(){
  try { return {...DEFAULT_SETTINGS, ...JSON.parse(localStorage.getItem('drivecarsSettings') || '{}')}; }
  catch { return {...DEFAULT_SETTINGS}; }
}
function saveSettings(){ localStorage.setItem('drivecarsSettings', JSON.stringify(settings)); }
function money(value, currency){ return `${Number(value).toFixed(2)} ${currency}`; }
function getContainerPrice(port){ return ({1:650,2:700,3:800,4:1200,5:850,6:750,7:1350,8:1200})[port] || 0; }
function vehicleAge(year){ return Math.min(15, Math.max(1, new Date().getFullYear() - year)); }
function exciseBase(fuel, capacity){
  if (fuel === 0) return capacity <= 3000 ? 50 : 100;
  if (fuel === 1) return capacity <= 3500 ? 75 : 150;
  return 0;
}
function getUSAClearance(carPrice, auctionFee, year, capacity, fuel){
  if (fuel === 2) return capacity;
  const customsValue = carPrice + auctionFee + 1600;
  const excise = exciseBase(fuel, capacity) * (capacity / 1000) * vehicleAge(year);
  const duty = customsValue * 0.1;
  const vat = (customsValue + duty + excise) * 0.2;
  return duty + excise + vat;
}
function getEuropeClearance(carPrice, deliveryEurope, year, capacity, fuel){
  if (fuel === 2) return capacity;
  const customsValue = carPrice + 300 + deliveryEurope;
  const excise = exciseBase(fuel, capacity) * (capacity / 1000) * vehicleAge(year);
  const duty = customsValue * 0.1;
  const vat = (customsValue + duty + excise) * 0.2;
  return duty + excise + vat;
}
function calculateProfit(base, minimum, percent){ return Math.max(minimum, base * (percent / 100)); }
function solveFinalWithSwift(baseWithProfit){ return baseWithProfit / (1 - settings.swiftPercent / 100); }
function renderLines(containerId, rows, currency){
  const root=document.getElementById(containerId); root.innerHTML='';
  rows.forEach(([label,value])=>{ const row=document.createElement('div'); row.className='line-item'; row.innerHTML=`<span>${label}</span><span>${money(value,currency)}</span>`; root.appendChild(row); });
}

function calculateUSA(){
  const carPrice=Number(document.getElementById('price-USA').value);
  const capacity=Number(document.getElementById('engine-capacity-USA').value);
  const year=Number(document.getElementById('year-USA').value);
  if(!(carPrice>0)) return alert('Введіть вартість автомобіля');
  if(!(capacity>0)) return alert(americaFuel===2?'Введіть ємність батареї':'Введіть об’єм двигуна');
  if(!(year>0)) return alert('Введіть рік випуску');

  const state=statesInfo[americaState];
  const auctionFee=getAuctionAmerica(carPrice);
  const landCost=state.price + settings.usaLandExtra;
  const seaCost=getContainerPrice(state.port) + settings.seaExtra;
  const seaFirstCost=seaCost * settings.seaFirstPercent / 100;
  const seaSecondCost=seaCost - seaFirstCost;
  const clearance=usaMode==='with' ? getUSAClearance(carPrice,auctionFee,year,capacity,americaFuel) : 0;
  const secondBase=seaSecondCost + settings.unloadPort + settings.klaipedaLutsk + settings.broker + settings.usaService + clearance;
  const costBeforeProfitAndSwift=carPrice + auctionFee + landCost + seaCost + settings.unloadPort + settings.klaipedaLutsk + settings.broker + settings.usaService + clearance;
  const profit=calculateProfit(costBeforeProfitAndSwift, settings.usaMinProfit, settings.usaProfitPercent);
  const finalTotal=solveFinalWithSwift(costBeforeProfitAndSwift + profit);
  const swift=finalTotal * settings.swiftPercent / 100;

  // Увесь прибуток входить у перший платіж і розкидається між доставкою до порту та частиною моря.
  const profitLand=profit * 0.4;
  const profitSea=profit - profitLand;
  const visibleLand=landCost + profitLand;
  const visibleSeaFirst=seaFirstCost + profitSea;
  const firstTotal=carPrice + auctionFee + visibleLand + visibleSeaFirst + swift;
  const secondTotal=secondBase;

  document.getElementById('usa-total').textContent=finalTotal.toFixed(2);
  document.getElementById('usa-first-total').textContent=money(firstTotal,'$');
  document.getElementById('usa-second-total').textContent=money(secondTotal,'$');
  renderLines('usa-first-lines',[
    ['Лот + аукціонний збір',carPrice+auctionFee],
    ['Доставка до порту',visibleLand],
    ['Часткова оплата морської доставки',visibleSeaFirst],
    [`SWIFT (${settings.swiftPercent}%)`,swift]
  ],'$');
  const secondRows=[
    ['Залишок морської доставки',seaSecondCost],
    ['Вигрузка в порту',settings.unloadPort],
    ['Клайпеда → Луцьк',settings.klaipedaLutsk],
    ['Брокерські послуги',settings.broker],
    ['Послуги Drive Cars',settings.usaService]
  ];
  if(usaMode==='with') secondRows.push(['Розмитнення',clearance]);
  renderLines('usa-second-lines',secondRows,'$');
}

function calculateEurope(){
  const carPrice=Number(document.getElementById('price-Europe').value);
  const deliveryEurope=Number(document.getElementById('delivery-Europe').value);
  const capacity=Number(document.getElementById('engine-capacity-Europe').value);
  const year=Number(document.getElementById('year-Europe').value);
  if(!(carPrice>0)) return alert('Введіть вартість автомобіля');
  if(deliveryEurope<0 || Number.isNaN(deliveryEurope)) return alert('Введіть доставку по Європі');
  if(!(capacity>0)) return alert(europeFuel===2?'Введіть ємність батареї':'Введіть об’єм двигуна');
  if(!(year>0)) return alert('Введіть рік випуску');

  const country=EUROPE_COUNTRIES[europeCountry];
  const clearance=europeMode==='with' ? getEuropeClearance(carPrice,deliveryEurope,year,capacity,europeFuel) : 0;
  const baseCost=carPrice + country.fee + deliveryEurope + settings.europeLutsk + settings.certificate + settings.euService + clearance;
  const profit=calculateProfit(baseCost, settings.euMinProfit, settings.euProfitPercent);
  const finalTotal=solveFinalWithSwift(baseCost + profit);
  const swift=finalTotal * settings.swiftPercent / 100;

  // Прибуток розподіляємо по лоту+зборах, доставці до України та послугах.
  const profitLot=profit*0.5, profitDelivery=profit*0.3, profitServices=profit-profitLot-profitDelivery;
  const rows=[
    ['Автомобіль + збір AUTO1',carPrice+country.fee+profitLot],
    ['Доставка по Європі',deliveryEurope],
    ['Доставка Європа → Луцьк',settings.europeLutsk+profitDelivery],
    ['Сертифікат',settings.certificate],
    ['Інші послуги',settings.euService+profitServices],
    [`SWIFT (${settings.swiftPercent}%)`,swift]
  ];
  if(europeMode==='with') rows.push(['Розмитнення',clearance]);
  document.getElementById('europe-total').textContent=finalTotal.toFixed(2);
  document.getElementById('europe-pay').textContent=money(finalTotal,'€');
  renderLines('europe-lines',rows,'€');
}

function initTabs(){ document.querySelectorAll('.tab').forEach(btn=>btn.addEventListener('click',()=>{ document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active')); document.querySelectorAll('.panel').forEach(x=>x.classList.remove('active')); btn.classList.add('active'); document.getElementById(`panel-${btn.dataset.tab}`).classList.add('active'); })); }
function initModes(){ document.querySelectorAll('.mode-switch').forEach(group=>group.querySelectorAll('.mode-btn').forEach(btn=>btn.addEventListener('click',()=>{ group.querySelectorAll('.mode-btn').forEach(x=>x.classList.remove('active')); btn.classList.add('active'); if(group.dataset.scope==='usa') usaMode=btn.dataset.mode; else europeMode=btn.dataset.mode; }))); }
function initSimpleSelects(){ document.querySelectorAll('.simple-select').forEach(select=>{ const trigger=select.querySelector('.select-trigger'),label=select.querySelector('.select-label'); trigger.addEventListener('click',()=>{ document.querySelectorAll('.select.open').forEach(s=>s!==select&&s.classList.remove('open')); select.classList.toggle('open'); }); select.addEventListener('click',e=>{ const btn=e.target.closest('.option'); if(!btn)return; select.querySelectorAll('.option').forEach(x=>x.classList.remove('active')); btn.classList.add('active'); label.textContent=btn.textContent; select.classList.remove('open'); const value=Number(btn.dataset.value); if(select.dataset.target==='usa-fuel')americaFuel=value; if(select.dataset.target==='europe-fuel')europeFuel=value; if(select.dataset.target==='europe-country')europeCountry=value; }); }); }
function initEuropeCountries(){ const root=document.getElementById('europe-country-options'); root.innerHTML=''; EUROPE_COUNTRIES.forEach((c,i)=>{ const b=document.createElement('button'); b.type='button'; b.className=`option ${i===europeCountry?'active':''}`; b.dataset.value=i; b.textContent=`${c.name} (${c.code})`; root.appendChild(b); }); const label=root.closest('.select').querySelector('.select-label'); label.textContent=EUROPE_COUNTRIES[europeCountry].name; }
function initUSAStateSelect(){ const wrap=document.getElementById('usa-state-select'),trigger=wrap.querySelector('.select-trigger'),label=document.getElementById('usa-state-label'),options=document.getElementById('usa-state-options'),search=document.getElementById('usa-state-search'); const filtered=q=>!q?statesInfo:statesInfo.filter(x=>x.state.toLowerCase().includes(q.toLowerCase())); const render=list=>{ options.innerHTML=''; list.forEach(item=>{ const idx=statesInfo.indexOf(item),b=document.createElement('button'); b.type='button'; b.className=`option ${idx===americaState?'active':''}`; b.textContent=item.state; b.addEventListener('click',()=>{americaState=idx;label.textContent=item.state;wrap.classList.remove('open');render(filtered(search.value.trim()));});options.appendChild(b); }); }; trigger.addEventListener('click',()=>{document.querySelectorAll('.select.open').forEach(s=>s!==wrap&&s.classList.remove('open'));wrap.classList.toggle('open');setTimeout(()=>search.focus(),0);}); search.addEventListener('input',()=>render(filtered(search.value.trim()))); render(statesInfo); }
function initLogin(){ const overlay=document.getElementById('login-overlay'),app=document.getElementById('app'),form=document.getElementById('login-form'),input=document.getElementById('login-password'),error=document.getElementById('login-error'); form.addEventListener('submit',e=>{e.preventDefault(); if(input.value===CALCULATOR_PASSWORD){overlay.classList.add('hidden');app.classList.remove('is-locked');sessionStorage.setItem('drivecarsUnlockedV2','1');}else{error.textContent='Невірний пароль';input.select();}}); if(sessionStorage.getItem('drivecarsUnlockedV2')==='1'){overlay.classList.add('hidden');app.classList.remove('is-locked');} }
function adminMap(){ return { 'set-usa-min-profit':'usaMinProfit','set-usa-profit-percent':'usaProfitPercent','set-eu-min-profit':'euMinProfit','set-eu-profit-percent':'euProfitPercent','set-sea-first-percent':'seaFirstPercent','set-usa-land-extra':'usaLandExtra','set-sea-extra':'seaExtra','set-swift-percent':'swiftPercent','set-klaipeda-lutsk':'klaipedaLutsk','set-europe-lutsk':'europeLutsk','set-broker':'broker','set-usa-service':'usaService','set-eu-service':'euService','set-certificate':'certificate'}; }
function fillAdmin(){ const map=adminMap(); Object.entries(map).forEach(([id,key])=>document.getElementById(id).value=settings[key]); return map; }
function initAdmin(){ const modal=document.getElementById('admin-modal'),login=document.getElementById('admin-login'),settingsBox=document.getElementById('admin-settings'),pass=document.getElementById('admin-password'),error=document.getElementById('admin-error'); document.getElementById('open-admin').addEventListener('click',()=>{modal.classList.add('open');modal.setAttribute('aria-hidden','false');login.classList.remove('hidden');settingsBox.classList.add('hidden');pass.value='';error.textContent='';}); document.querySelectorAll('[data-close-admin]').forEach(x=>x.addEventListener('click',()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');})); document.getElementById('admin-unlock').addEventListener('click',()=>{const entered=String(pass.value||'').trim(); if(entered!=='DriveCarsAdmin2026'){error.textContent='Невірний пароль адміністратора'; pass.select(); return;} error.textContent=''; login.classList.add('hidden');settingsBox.classList.remove('hidden');fillAdmin();}); document.getElementById('admin-form').addEventListener('submit',e=>{e.preventDefault(); const map=adminMap(); Object.entries(map).forEach(([id,key])=>settings[key]=Number(document.getElementById(id).value)); saveSettings(); modal.classList.remove('open'); alert('Налаштування збережено');}); document.getElementById('reset-settings').addEventListener('click',()=>{settings={...DEFAULT_SETTINGS};saveSettings();fillAdmin();}); }

document.addEventListener('click',e=>{if(!e.target.closest('.select'))document.querySelectorAll('.select.open').forEach(s=>s.classList.remove('open'));});
window.addEventListener('DOMContentLoaded',()=>{ initLogin(); initTabs(); initModes(); initEuropeCountries(); initSimpleSelects(); initUSAStateSelect(); initAdmin(); document.getElementById('btn-calc-USA').addEventListener('click',calculateUSA); document.getElementById('btn-calc-Europe').addEventListener('click',calculateEurope); });
