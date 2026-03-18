const SHEET_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbx9Y8dyZZFFj2Ixfn2vx7CB7nfZFNhvdE9GLbAqlR3N5WQejbyJnHuhtbk91gQIP2GqVA/exec";

const statesInfo = [
  {state: "ABILENE - TX", price: 420, port: 3},
  {state: "ACE - Carson (CA)", price: 345, port: 4},
  {state: "ACE - Perris - CA", price: 310, port: 4},
  {state: "ADELANTO-CA", price: 320, port: 4},
  {state: "AKRON-CANTON (OH)", price: 600, port: 1},
  {state: "ALBANY - NY", price: 325, port: 1},
  {state: "ALBUQUERQUE - NM", price: 770, port: 3},
  {state: "ALTOONA - PA", price: 490, port: 1},
  {state: "AMARILLO - TX", price: 495, port: 3},
  {state: "ANAHEIM (CA)", price: 260, port: 4},
  {state: "APPLETON - WI", price: 400, port: 5},
  {state: "ASHEVILLE - NC", price: 420, port: 2},
  {state: "ATLANTA EAST - GA", price: 395, port: 2},
  {state: "ATLANTA GA", price: 395, port: 2},
  {state: "AUGUSTA - GA", price: 370, port: 2},
  {state: "AUSTIN - TX", price: 320, port: 3},
  {state: "AVENEL NEW JERSEY (NJ)", price: 245, port: 1},
  {state: "BAKERSFIELD - CA", price: 370, port: 4},
  {state: "BALTIMORE - MD", price: 370, port: 1},
  {state: "BATON ROUGE - LA", price: 395, port: 3},
  {state: "BIRMINGHAM - AL", price: 475, port: 2},
  {state: "BOISE-ID", price: 570, port: 6},
  {state: "BOSTON - SHIRLEY - MA", price: 445, port: 1},
  {state: "BRIDGEPORT (PA)", price: 345, port: 1},
  {state: "BUFFALO - NY", price: 545, port: 1},
  {state: "CARTERSVILLE - GA", price: 370, port: 1},
  {state: "CHARLESTON - SC", price: 320, port: 2},
  {state: "CHARLOTTE (NC)", price: 370, port: 2},
  {state: "CHICAGO NORTH - IL", price: 270, port: 5},
  {state: "CHICAGO SOUTH - IL", price: 270, port: 5},
  {state: "CINCINNATI - OH", price: 550, port: 1},
  {state: "CLEARWATER-FL", price: 370, port: 7},
  {state: "CLEVELAND EAST - OH", price: 650, port: 1},
  {state: "COLTON - CA", price: 280, port: 4},
  {state: "COLUMBIA - SC", price: 290, port: 2},
  {state: "COLUMBUS - OH", price: 600, port: 1},
  {state: "DALLAS- TX", price: 370, port: 3},
  {state: "DENVER - CO", price: 620, port: 5},
  {state: "DETROIT - MI", price: 500, port: 5},
  {state: "EAST BAY (CA)", price: 495, port: 4},
  {state: "EL PASO - TX", price: 520, port: 3},
  {state: "ERIE - PA", price: 595, port: 1},
  {state: "FORT WAYNE - IN", price: 370, port: 5},
  {state: "FREMONT - CA", price: 445, port: 4},
  {state: "FRESNO - CA", price: 420, port: 4},
  {state: "FT.PIERCE - FL", price: 270, port: 7},
  {state: "FT.WORTH - TX", price: 345, port: 3},
  {state: "GREENSBORO (NC)", price: 395, port: 2},
  {state: "GREENVILLE (SC)", price: 320, port: 2},
  {state: "HAMMOND - IN", price: 270, port: 5},
  {state: "HARRISBURG - PA", price: 370, port: 1},
  {state: "HARTFORD - CT", price: 305, port: 1},
  {state: "HIGH DESERT - CA", price: 250, port: 4},
  {state: "HOUSTON - TX", price: 270, port: 3},
  {state: "INDIANAPOLIS - IN", price: 420, port: 5},
  {state: "JACKSONVILLE EAST - FL", price: 270, port: 2},
  {state: "KANSAS CITY - KS", price: 495, port: 5},
  {state: "KNOXVILLE - TN", price: 470, port: 2},
  {state: "LAS VEGAS - NV", price: 520, port: 4},
  {state: "LONG BEACH - CA", price: 220, port: 4},
  {state: "LONG ISLAND - NY", price: 320, port: 1},
  {state: "LOS ANGELES - CA", price: 270, port: 4},
  {state: "LOUISVILLE - KY", price: 495, port: 5},
  {state: "MACON - GA", price: 320, port: 2},
  {state: "MIAMI CENTRAL - FL", price: 270, port: 7},
  {state: "MILWAUKEE - WI", price: 350, port: 5},
  {state: "MINNEAPOLIS - MN", price: 420, port: 5},
  {state: "NASHVILLE - TN", price: 470, port: 2},
  {state: "NEWBURGH - NY", price: 320, port: 1},
  {state: "NORTHERN VIRGINIA (VA)", price: 470, port: 1},
  {state: "OCALA - FL", price: 345, port: 7},
  {state: "OKLAHOMA CITY - OK", price: 595, port: 3},
  {state: "ORLANDO - FL", price: 345, port: 7},
  {state: "PHILADELPHIA - PA", price: 300, port: 1},
  {state: "PHOENIX - AZ", price: 420, port: 4},
  {state: "PITTSBURGH EAST - PA", price: 545, port: 1},
  {state: "PORTLAND (OR)", price: 470, port: 6},
  {state: "PUNTA GORDA - FL", price: 320, port: 7},
  {state: "RALEIGH - NC", price: 370, port: 2},
  {state: "RENO - NV", price: 620, port: 4},
  {state: "RICHMOND - VA", price: 470, port: 1},
  {state: "SACRAMENTO - CA", price: 445, port: 4},
  {state: "SAN ANTONIO - TX", price: 345, port: 3},
  {state: "SAN BERNARDINO- CA", price: 270, port: 4},
  {state: "SAN DIEGO - CA", price: 370, port: 4},
  {state: "SAVANNAH - GA", price: 195, port: 2},
  {state: "SCRANTON - PA", price: 345, port: 1},
  {state: "SEATTLE (WA)", price: 220, port: 6},
  {state: "SOMERVILLE - NJ", price: 245, port: 1},
  {state: "SPOKANE - WA", price: 420, port: 6},
  {state: "ST. LOUIS - MO", price: 420, port: 5},
  {state: "SYRACUSE - NY", price: 390, port: 1},
  {state: "TAMPA - FL", price: 400, port: 2},
  {state: "TUCSON - AZ", price: 445, port: 4},
  {state: "TULSA - OK", price: 595, port: 3},
  {state: "VAN NUYS - CA", price: 270, port: 4},
  {state: "WASHINGTON DC - MD", price: 395, port: 1},
  {state: "WEST PALM BEACH - FL", price: 270, port: 7},
  {state: "WICHITA - KS", price: 620, port: 3},
  {state: "YORK HAVEN - PA", price: 370, port: 1}
];

const countryNames = ["DE", "PL", "FR", "NL", "AT", "BE", "ES", "SE", "IT", "PT"];
const fuelNames = ["Бензиновий", "Дизельний", "Електричний"];
const collection = [700, 700, 700, 800, 800, 700, 900, 900, 900, 900];
const crossBorder = [139, 99, 89, 185, 149, 139, 245, 149, 379, 189];
const processingDocs = [249, 149, 269, 229, 259, 249, 229, 252, 189, 159];

function safeNum(v) { return Number(v || 0); }
function fmt(n) { return Number(n).toFixed(2); }

function getContainerPrice(port) {
  if (port === 1) return 650;
  if (port === 2) return 700;
  if (port === 3) return 800;
  if (port === 4) return 1200;
  if (port === 5) return 850;
  if (port === 6) return 750;
  if (port === 7) return 1350;
  return 1200;
}

function getAuctionAmerica(price) {
  let fee0 = 0, fee1 = 0;
  if (price <= 99.99) fee0 = 1;
  else if (price <= 199.99) fee0 = 25;
  else if (price <= 299.99) fee0 = 50;
  else if (price <= 399.99) fee0 = 75;
  else if (price <= 499.99) fee0 = 110;
  else if (price <= 549.99) fee0 = 125;
  else if (price <= 699.99) fee0 = 140;
  else if (price <= 799.99) fee0 = 155;
  else if (price <= 899.99) fee0 = 170;
  else if (price <= 999.99) fee0 = 185;
  else if (price <= 1199.99) fee0 = 200;
  else if (price <= 1299.99) fee0 = 225;
  else if (price <= 1399.99) fee0 = 240;
  else if (price <= 1499.99) fee0 = 250;
  else if (price <= 1599.99) fee0 = 260;
  else if (price <= 1699.99) fee0 = 275;
  else if (price <= 1799.99) fee0 = 285;
  else if (price <= 1999.99) fee0 = 300;
  else if (price <= 2399.99) fee0 = 325;
  else if (price <= 2499.99) fee0 = 335;
  else if (price <= 2999.99) fee0 = 350;
  else if (price <= 3499.99) fee0 = 400;
  else if (price <= 3999.99) fee0 = 455;
  else if (price <= 4499.99) fee0 = 600;
  else if (price <= 5999.99) fee0 = 625;
  else if (price <= 7499.99) fee0 = 675;
  else if (price <= 7999.99) fee0 = 690;
  else if (price <= 9999.99) fee0 = 715;
  else if (price <= 14999.99) fee0 = 720;
  else fee0 = price * 0.0575;

  if (price <= 99.99) fee1 = 0;
  else if (price <= 499.99) fee1 = 49;
  else if (price <= 999.99) fee1 = 59;
  else if (price <= 1499.99) fee1 = 79;
  else if (price <= 1999.99) fee1 = 89;
  else if (price <= 3999.99) fee1 = 99;
  else if (price <= 5999.99) fee1 = 109;
  else if (price <= 7999.99) fee1 = 139;
  else fee1 = 149;

  return fee0 + fee1 + 10 + 50 + 69;
}

function getClearanceUSA(carPrice, auctionFee, yearRelease, engineCapacity, fuelType) {
  if (fuelType === 2) return engineCapacity;
  let base = carPrice + auctionFee + 1600;
  let basicExcise = 0;
  if (fuelType === 0) basicExcise = engineCapacity <= 3000 ? 50 : 100;
  if (fuelType === 1) basicExcise = engineCapacity <= 3500 ? 75 : 150;
  let coeffYear = 2024 - yearRelease;
  if (coeffYear < 1) coeffYear = 1;
  if (coeffYear > 15) coeffYear = 15;
  const excise = basicExcise * (engineCapacity / 1000) * coeffYear;
  const toll = base * 0.1;
  const pdv = (base + toll + excise) * 0.2;
  return toll + excise + pdv;
}

async function sendProfitData(payload) {
  try {
    const response = await fetch(SHEET_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    return await response.json();
  } catch (e) {
    return { success: false, error: e.message };
  }
}

function setStatus(id, text, ok = true) {
  const el = document.getElementById(id);
  el.textContent = text;
  el.style.color = ok ? "#a7f3d0" : "#fca5a5";
}

function initTabs() {
  document.querySelectorAll('.tabs-wrapper .item').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tabs-wrapper .item').forEach(x => x.classList.remove('active'));
      document.querySelectorAll('.calculate-wrapper').forEach(x => x.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
    });
  });
}

function initStates() {
  const stateSelect = document.getElementById('stateUSA');
  const search = document.getElementById('stateSearchUSA');

  function render(filter = '') {
    stateSelect.innerHTML = '';
    statesInfo
      .filter(s => s.state.toLowerCase().includes(filter.toLowerCase()))
      .forEach((s, idx) => {
        const opt = document.createElement('option');
        opt.value = statesInfo.findIndex(x => x.state === s.state);
        opt.textContent = s.state;
        stateSelect.appendChild(opt);
      });
  }
  render();
  search.addEventListener('input', () => render(search.value));
}

function initEurope() {}

async function calculateEurope(type) {
  try {
  const manager = document.getElementById('managerName').value || 'Не вказано';
  const country = safeNum(document.getElementById('countryEurope').value);
  const yearRelease = safeNum(document.getElementById('yearEurope').value);
  const priceCar = safeNum(document.getElementById('priceEurope').value);
  const fuel = safeNum(document.getElementById('fuelEurope').value);
  const priceEurope = safeNum(document.getElementById('deliveryEurope').value);
  const engineCapacity = safeNum(document.getElementById('engineEurope').value);
  const address = document.getElementById('addressEurope').checked;
  const buttonOn = document.getElementById('buttonEurope').checked;

  if (!priceCar || !priceEurope || !yearRelease || (!engineCapacity && fuel !== 2)) {
    setStatus('euStatus', 'Заповни всі поля.', false);
    return;
  }

  const priceService = 550;
  const priceCarAuction = priceCar + crossBorder[country] + processingDocs[country];
  const broker = 250;
  const certificate = 150;
  const priceColl = collection[country];
  const priceSwift = 150 + (0.033 * (priceCarAuction + priceColl));
  const buttonCC = buttonOn ? 250 : 0;

  const allPriceNoUK = priceCarAuction + priceEurope + broker + certificate + priceService + priceSwift + buttonCC;

  let priceUK = 0;
  if (allPriceNoUK < 4000) priceUK = 1300;
  else if (allPriceNoUK < 6000) priceUK = 1650;
  else priceUK = 1800;

  const fee = (priceCarAuction + priceEurope + priceUK) * 0.005;

  const pliceCarOlso = priceCar + 300 + priceEurope;
  let basicExcise = 0;
  if (fuel === 0) basicExcise = engineCapacity <= 3000 ? 50 : 100;
  if (fuel === 1) basicExcise = engineCapacity <= 3500 ? 75 : 150;
  let coeffYear = 2024 - yearRelease;
  if (coeffYear < 1) coeffYear = 1;
  if (coeffYear > 15) coeffYear = 15;
  const excise = basicExcise * (engineCapacity / 1000) * coeffYear;
  const toll = pliceCarOlso * 0.1;
  const pdv = (pliceCarOlso + toll + excise) * 0.2;
  const customsclearance = type === 1 ? toll + excise + pdv : 0;

  const allPriceCar = allPriceNoUK + priceUK + 100 + fee + customsclearance + (address ? 400 : 0) + (type === 1 ? 0 : -150);

  const realPriceUK = 450;
  const realCertificate = 50;
  const realSwift = 120 + (0.033 * (priceCarAuction + priceColl));
  const realBroker = 250;
  const realCost = priceCarAuction + priceEurope + realBroker + realCertificate + priceService + realSwift + customsclearance + realPriceUK + fee;
  const profit = allPriceCar - realCost;
  const paymentThree = priceCarAuction + priceEurope + priceUK + broker + 350 + priceSwift;

  const arr = [fmt(priceCarAuction), fmt(priceEurope), fmt(priceService), fmt(priceSwift), fmt(customsclearance), fmt(address ? 200 : 0), fmt(address ? 200 : 0), fmt(allPriceCar), fmt(paymentThree) + ' €'];
  arr.forEach((v, i) => document.getElementById('euOut' + i).textContent = v);
  document.getElementById('euRealCost').textContent = fmt(realCost) + ' €';
  document.getElementById('euProfit').textContent = fmt(profit) + ' €';

  const result = await sendProfitData({
    manager,
    calculator: type === 1 ? 'Європа' : 'Європа без розмитнення',
    location: countryNames[country],
    fuel: fuelNames[fuel],
    carPrice: fmt(priceCar) + ' €',
    delivery: fmt(priceEurope) + ' €',
    year: yearRelease,
    engine: engineCapacity,
    finalPrice: fmt(allPriceCar) + ' €',
    realCost: fmt(realCost) + ' €',
    profit: fmt(profit) + ' €',
    comment: 'Кнопка: ' + (buttonOn ? 'Так' : 'Ні') + ', Адресна доставка: ' + (address ? 'Так' : 'Ні')
  });
  setStatus('euStatus', result.success ? 'Дані відправлено в таблицю і Telegram.' : ('Помилка: ' + (result.error || 'невідома')), !!result.success);
  } catch (e) {
    console.error(e);
    setStatus('euStatus', 'JS помилка: ' + e.message, false);
  }
}

function initUSA() {}

async function calculateUSA() {
  try {
  const manager = document.getElementById('managerName').value || 'Не вказано';
  const carPrice = safeNum(document.getElementById('priceUSA').value);
  const stateIndex = safeNum(document.getElementById('stateUSA').value);
  const fuel = safeNum(document.getElementById('fuelUSA').value);
  const engineCapacity = safeNum(document.getElementById('engineUSA').value);
  const yearRelease = safeNum(document.getElementById('yearUSA').value);
  const address = document.getElementById('addressUSA').checked;

  if (!carPrice || !yearRelease || (!engineCapacity && fuel !== 2)) {
    setStatus('usStatus', 'Заповни всі поля.', false);
    return;
  }

  const selectedState = statesInfo[stateIndex] || statesInfo[0];
  let auctionFee = getAuctionAmerica(carPrice);
  let deliveryPort = selectedState.price + 150;
  let deliverySea = getContainerPrice(selectedState.port) + 600;
  const unloadPort = 400;
  let deliveryKiev = 1400;
  const broker = 250;
  const service = 500;
  const clearance = getClearanceUSA(carPrice, auctionFee, yearRelease, engineCapacity, fuel);
  const priceSwift = 100 + (0.032 * (carPrice + auctionFee));
  let accompaniment = 0;
  let markUp = 0;

  let allPrice = carPrice + auctionFee + deliveryPort + deliverySea + unloadPort + (address ? 400 : 0) + deliveryKiev + broker + service + accompaniment + clearance + priceSwift + markUp;

  if (allPrice >= 9000 && allPrice <= 25000) {
    auctionFee += 100;
    deliverySea = getContainerPrice(selectedState.port) + 800;
    deliveryKiev = 1600;
  } else if (allPrice > 25000 && allPrice <= 55000) {
    auctionFee += 100;
    deliverySea = getContainerPrice(selectedState.port) + 800;
    deliveryKiev = 1600;
    accompaniment = 200;
    markUp = 250;
  } else if (allPrice > 55000) {
    auctionFee += 100;
    deliverySea = getContainerPrice(selectedState.port) + 800;
    deliveryKiev = 1600;
    accompaniment = 200;
    markUp = 750;
  }

  allPrice = carPrice + auctionFee + deliveryPort + deliverySea + unloadPort + deliveryKiev + broker + service + accompaniment + clearance + priceSwift + markUp + (address ? 400 : 0);
  const paymentThree = auctionFee + carPrice + deliveryPort + deliverySea + priceSwift + 1000;

  const realCost = carPrice + getAuctionAmerica(carPrice) + selectedState.price + getContainerPrice(selectedState.port) + unloadPort + 450 + 50 + 120 + (0.032 * (carPrice + getAuctionAmerica(carPrice))) + 50 + clearance;
  const profit = allPrice - realCost;

  const arr = [fmt(auctionFee + carPrice), fmt(broker), fmt(service), fmt(deliveryPort), fmt(deliverySea), fmt(priceSwift), fmt(clearance), fmt(address ? 400 : 0), fmt(accompaniment), fmt(allPrice), fmt(paymentThree) + ' $'];
  arr.forEach((v, i) => document.getElementById('usOut' + i).textContent = v);
  document.getElementById('usRealCost').textContent = fmt(realCost) + ' $';
  document.getElementById('usProfit').textContent = fmt(profit) + ' $';

  const result = await sendProfitData({
    manager,
    calculator: 'США',
    location: selectedState.state,
    fuel: fuelNames[fuel],
    carPrice: fmt(carPrice) + ' $',
    delivery: fmt(deliveryPort + deliverySea + deliveryKiev) + ' $',
    year: yearRelease,
    engine: engineCapacity,
    finalPrice: fmt(allPrice) + ' $',
    realCost: fmt(realCost) + ' $',
    profit: fmt(profit) + ' $',
    comment: 'Адресна доставка: ' + (address ? 'Так' : 'Ні')
  });
  setStatus('usStatus', result.success ? 'Дані відправлено в таблицю і Telegram.' : ('Помилка: ' + (result.error || 'невідома')), !!result.success);
  } catch (e) {
    console.error(e);
    setStatus('usStatus', 'JS помилка: ' + e.message, false);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initStates();
  initEurope();
  initUSA();
});
