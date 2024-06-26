// ==UserScript==
// @name         치지직 라이브 버튼 추가
// @namespace    http://tampermonkey.net/
// @version      2024-05-28
// @description  진행중이지 않은 방송 화면으로 들어가서 채팅을 볼 수 있게 하거나 방송을 미리 기다릴 수 있게 해줍니다.
// @author       새하얀구름 (https://clsw.kr/)
// @match        https://chzzk.naver.com/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAOwAAADsAEnxA+tAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAC4lJREFUeJztnXuMFdUdxz+/mbtvQEShCK2I5bGwtKiA9a1UrbZNaypxfbTaGCOmPkg0sqBo3UbLYzHUR9GCjzRpG2UrNU2attZUE2sBEV/VZXdRq0Vbq1QEd9ll770zv/6BFQsz9869M3Nn797z+fM8v7nne8+ZM/ObM2AwGAwGg8FgqDgkaQGVziMv3jtOHJkjrkxFmADaICL1quxC6QXZ5lpO1zCp3vyt2Vf1Rd2/MUACtG/62XS1s5epynkCjQGrDQiyUZV12TTrvnvq1R9FocUYoISs27R6rlgsUTgzZFP9iD6Ycty2eScseDdMQ8YAJaB9w/3jXVuXieilETfdj9I2fJSz7BuTFwwU04AxQMw8unn1+QIPASPj6kPgJWyam2dd80ahda04BBlAVWXd5tV3CqwnxsEHUDhWHV5Y9/x9ZxVa18wAMdCqrda05w9/GOT7pe1Z04hecuGc69YHrWFmgBhofH70qtIPPoBUo9Yj656795zANeKUU4ms2/zTBSB3Jyxjt9jMDnJNYAwQIe2b7pullrsBpDppLcCL0jD6xOam5nSuQmYJiIj29nYbSx8YJIMPcBx7dtyQr5AxQES4R+24SuHYMG2kMxk+3PUhH+z8gN29u3BdN5QmhVvbN9w/PlcZY4AIWLNlTRVKS5g2XHXZ3fsRWSeLqrJ3YICP9/SElVavKb0xVwFjgAg4VDMXiTAhTBvZTAbX1f9LS2eKurl3ADr/8Zd+4nsfwhggAhS5PHwbenCaHpxWBPXpTPUFfpnGACFp37x6LMrpSevIjV7kl2MMEBJV5jLof0c5qX3DqjqvnEEuvAwQTklaQgBqNVU9xyvDGCAswrSkJQRBxPIMPEmVWkgQtKN1GFI3A9GZiEwHHQ8yBjgcGAMclrDET/ldj0tfGfyPVHWyV/qgMIB2rBpFKns26NdRTgEmAtb+O9WD9451pgwG/xMO8UpMzAD6+tLRZO3LEOZB5ngUOyktYchGslMDb5NHaHxlmFdyyQ2gnctmYVnzcbgUwfPKtJyoEiWt4QcqZafYN+D7HZVKRTg8Frs9+42uh9zotpVn4epy0Fke9zzKlpqIDGDbNsPqG+jt2wMolliMqB8eXuAnqOoHXumxG0C3LT8NV5biuifH3VcS1FkuPW401wENdQ3U1NTgOi5VqRQi0V1fCOIZPRybAfT1e0bg9q/E5UoG81VcSEZaiudfq0hSViqWzbm68qpnf9F3Bdq5/Byc/rXAkXG0P5gYaTtAVdIy8uFYw/U1r4xIDaCqQlfbbQg/ZAj/6z/L52wnsrYy2TQf9/bguvuWgOHDRmBbUWyOZFNz09W9XjmRTTba0TqMrhXrEW6jQgYfoM5SRljhAjdg35O/XT27yTpZXHUZyKTp6Q0dD/AJ7h/9ciIxgG798RHYdRsR+U4U7ZUbE6qyodtwHOegCKB0Nmc4X1BUbHnULzO0AfSNlWOwU08CM8K2Va5MrM6G/iEt2zpo2rQimP4FnsoVHRxK9767ee6fUZrCtFPu1IobehawxKK+fhj/Wz1FhOENEdwHEF2RM7vYdvWdVXXsyTwDzC62jaFEnwq/72kg7NWA4zg4rkMqlcIKex9AePrCOdd8NVeR4nvYk1mNGfxPqRelqTZ8DJ9t21RXVYcffBhwVK/LV6ioXrR7+Q1A6Di4oUZjdYbD7PA7gohYcsnx13bkK1TwEqDb2o7B1c2Uwd2PJNirFk/uqaPfTXAnrDzWfPzVzSKS96lLQTOAbllThas/xwy+L7XicmpdPzX5f/tYEOFP4gxcFmTwodA7gQ27lgAzixFWSYy0Xc5o6OeZvtLOBOOqHD02lb5z2Jwb+4PWCaxOO5cdhVhdQE1R6iqQvSps7K9lRzbeWBcBptWkaapJI/AmA9ZMmblwT5C6wZcAy2rFDH5B1IpyRl0/x9SkY3vsOsJ2mdvQz4x9gw/wRWrcW4PWDzQDaPfSRtR+lUESQ1iO7FWLrQMp3spU4UQQQFIvyvTaNEdVeUYlpnHcJmm6Ke/5AMEGVO3WwGUNntSKy3G1aWbUZHg7XcU72RQ7Haug4KgUMDaVZUJVlnGpLOLvo2os63bg4nxt5rWidrSNxdbtmCv/yNmrwodZm52OTa8Kfa6FA2RdqLKUKlEaZN80P8pyGGW72MF3Fy4WM2TKos5chfL/q1PMR83gx0GtKOOrsoyP4GmiBxYO1wPzcxXKOQOotlp0170NfCFCYYbSsZe0O06+fJPvsbK5dwHb6k/GDH45U0u1dWGuArkNoHw7UjmG0iPkPK4uz30APS9KLYYEUL6iXSvG+WX7GkA7lk0CPF8oNJQVAnKuX6b/DGDLCbHIMSSA+p4c6m8AtYwBhg6+Y+lvAFHPEyUMZcmR+sbKMV4ZuS4Cp8YkxpAEadfzMb6nAbRz6WH4HChgKFNEJnole88AYnsWNpQxokd7JfsYgM/HKsaQBAVcA6h6HidiKGs83zLxMQANsUoxJEEBBrCMAYYgnoEEZXPGmSEkgmfQgbcBXMvzMAFDWeP5rrnPLsCN/CPFhoTxOcrIxwBiZoChxw6vRJ8lwH0nVimG0iPqOaY+Bqh5K1YxhgSwujxTvRKl6Yad4H20qKFMsaXbKznXNtCzgqEs2S6TFhZwEQgg+lxscgylRfirX1aOiCAxBhgyaBEGsGVTLFoMpUf0D35ZvgaQyS1vAttiEWQoHapbZcpNf/fLzvcs4LcRyzGUGpH1ubLzGECMAcqfX+XKzG2AqX0bge1RqjGUlGelcVHO7XxOA4i0uiAPRKvJUDr03nwl8scD2Nk1QBSfsTaUlnfpPfTxfIXyGkAm37wD4TfRaDKUDJU2mX1VJl+xYBFBrtMK3hElhkHJP0jVrg1SMJABZNrN24BfhJJkKB3CrTJ5QaBlO3hMoKOtmGuBcuBZprT8MmjhwAaQpsXbQe4oTpOhRGTBuiboOcFQaFTwe33LQV4oWJahNAh3SOPCvxVSpSADyNzWLOJeAeS9ujSUnC30jFxaaKWC3wuQqYtfAVoKrWeIlZ1gNQfZ9h1IUS+GSOOiu4CHiqlriBwX0e9J48Ki4jiLfzOopv9aYHPR9Q1Rcb1MXez7vD8fRRtAJrbuRexvAp4fJTaUhNulcdE9YRoIfW65vr50NK79dKV/OzAB7pLGRdeHbST0y6Ey+eYdpLNnAq+EbcsQENGlUQw+RPR2sHxpyfsMWCebh0ax47BvzV8SVYORftFIVYXuth8Bt0TdtoHdIBdJY4vvl8CLIZZB0u62U0EfRpkUR/sVyBYc9+Ign4AplFgOiJCpLX9BOQ7kfnxOpjAEIoPoUnpHnhTH4EMJpmntXHki4i4DTo+7ryHGs7jWD2T6wtfi7KRk67R2tn0N4Q4wR9DmoRPkNqYufKyQp3rFUtILNVUVulaehuiVwDygtpT9D27kBXDvYurRj4g0OyXrtVQdHYh2rBqFnb0U1fMRTqIyP0u3C3gc1Qdl2uINSQgYFFs1fXP5IWTkbOBc4BRgEhDv91YTQ7pAnwKewK57ImjoVmxqkuzcD93SWs/wmiawZ6LaBBwBjEV1NCJjgMMTluiHy76DNVxU30fkPVT/ichWkFdweFmaWv6dtMjPMigNkA/tWtEOXFCCrnpArpDGll+XoK9EqMR1NyjdODpPmhZ1JC0kTsxJoV4oj+L0z5amxUN68MHMAAeSBW6RaYtWJC2kVBgD7OdfIM3S2OJ7nMpQxCwBAMozuNnZlTb4YAygwD3sGXmWTF/yXtJikqCSl4Ahv8ULQqUaoCK2eEGovCWggrZ4QaikGaDitnhBqBQDVOQWLwhDfwmo4C1eEIayASp+ixeEoboEmC1eQIaiAcwWrwDKdAmQ/3gmmy1ewZTnDGCxFpfL2R9UmgFZKNNa7k5SVjlSlhFBANq9fCZwBWqlsFgrU1peTlqTwWAwGAwGg8FQFvwXxqJr/oCmXDYAAAAASUVORK5CYII=
// @grant        none
// @version      2024.05.28_v2
// ==/UserScript==

// icon source: https://www.flaticon.com/kr/

const secret = 'chzzkscript-' + Math.floor(Math.random() * Date.now()).toString(36);
const svg = '<svg width="20" height="20" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke-linejoin="round" stroke-width="2" stroke="currentColor" fill="currentColor" d="M41.6875 50.035V56.4283C41.6875 57.4779 42.8456 57.9891 43.6136 57.3025C47.0338 54.2473 53.9323 48.0705 56.6907 45.5129C60.4031 42.0695 62.6833 37.0062 62.4884 31.3953C62.1514 21.645 54.2472 14 44.8206 14L26.4402 14.0005C17.0461 14.0005 8.96226 21.4728 8.51992 31.186C8.04804 41.5562 16.0223 50.035 25.9375 50.035H41.6875Z" m41.6875=""></path></svg>';

async function documentReady () {
  if (document.readyState !== 'loading') {
    return null;
  }

  return new Promise(resolve => {
    document.addEventListener('readystatechange', () => {
      resolve(null);
    });
  });
}

function createMutationObserver () {
  /**
   * @type {Array<(mutations: MutationRecord[]) => any>}
   */
  const callbacks = [];
  const observer = new MutationObserver(function (mutations) {
    for (const callback of callbacks) {
      callback(mutations);
    }
  });

  observer.observe(document.body, {
    subtree: true,
    childList: true
  });

  /**
   * @param {Array<(mutations: MutationRecord[]) => any>} callback
   */
  function registerMutationObserver (callback) {
    callbacks.push(callback);
  }

  return registerMutationObserver;
}

/**
 * @param {string} url
 */
function createUrlObserver (url = location.href) {
  /**
   * @type {Array<() => any>}
   */
  const callbacks = [];

  /**
   * @param {() => any} callback
   */
  function registerUrlObserver (callback) {
    callbacks.push(callback);
  }

  function handleMutationObserverForUrlObservasion () {
    if (url !== location.href) {
      url = location.href;

      for (const callback of callbacks) {
        callback();
      }
    }
  }

  return [handleMutationObserverForUrlObservasion, registerUrlObserver];
}

/**
 * @param {HTMLButtonElement} button
 */
function cloneButtonFromAnother (button) {
  if (!button || !button.classList) {
    console.error('Invalid button or button.classList is not available:', button);
    return null;
  }

  const clonedButton = document.createElement('button');

  clonedButton.setAttribute('type', 'button');
  clonedButton.setAttribute('aria-haspopup', 'false');
  clonedButton.setAttribute('aria-expanded', 'false');

  for (const className of button.classList) {
    if (!className.startsWith('button_highlight')) {
      clonedButton.classList.add(className);
    }
  }

  return clonedButton;
}

function $addLiveButtonToSearchPage () {
  if (location.pathname !== '/search') {
    return
  }

  const profileContainers = document.querySelectorAll(`[class^="channel_item_container"]:not([${secret}])`)

  for (const profileContainer of profileContainers) {
    if (profileContainer.hasAttribute(secret)) {
      continue
    }

    const profileThumbnail = profileContainer.querySelector('a[class^="channel_item_thumbnail"][href^="/"]')
    const pathnameWithHash = profileThumbnail.getAttribute('href')
    const channelHashMatch = pathnameWithHash.match(/[a-z0-9]{32}/)

    if (channelHashMatch === null) {
      continue
    }

    profileContainer.setAttribute(secret, '')

    // Get the class list for the existing button
    const followButton = profileContainer.querySelector('[class^="channel_item_control"] button[class^="button_container"]')

    // A new button to create
    const liveButton = cloneButtonFromAnother(followButton)

    liveButton.setAttribute('class','button_container__x044H button_medium__r15mw button_capsule__tU-O- button_dark__cw8hT');
    liveButton.textContent = '라이브'

    liveButton.addEventListener('click', function () {
      location.href = '/live/' + channelHashMatch[0]
    })

    liveButton.insertAdjacentHTML('afterbegin', svg);
    followButton.insertAdjacentElement('beforebegin', liveButton)
  }
}

function $addLiveButtonToChannelPage () {
  if (!/\/[a-z0-9]{32}/.test(location.pathname)) {
    return;
  }

  const profileContainers = document.querySelectorAll(`[class^="channel_profile_container"]:not([${secret}])`);

  for (const profileContainer of profileContainers) {
    if (profileContainer.hasAttribute(secret)) {
      continue;
    }

    profileContainer.setAttribute(secret, '');

    const followButton = profileContainer.querySelector('[class^="channel_profile_action"] button[class^="button_container"]');

    if (!followButton) {
      console.error('followButton not found for profileContainer:', profileContainer);
      continue;
    }

    const liveButton = cloneButtonFromAnother(followButton);

    if (!liveButton) {
      console.error('Failed to create liveButton from followButton:', followButton);
      continue;
    }

    liveButton.setAttribute('class', 'button_container__x044H button_medium__r15mw button_capsule__tU-O- button_dark__cw8hT');
    liveButton.textContent = '라이브';

    liveButton.addEventListener('click', function () {
      const channelHashMatch = location.pathname.match(/[a-z0-9]{32}/);

      if (channelHashMatch) {
        location.href = '/live/' + channelHashMatch[0];
      }
    });

    liveButton.insertAdjacentHTML('afterbegin', svg);
    followButton.insertAdjacentElement('beforebegin', liveButton);
  }
}

documentReady().then(function () {
  const [handleMutationObserverForUrlObservasion, registerUrlObserver] = createUrlObserver();

  const registerMutationObserver = createMutationObserver();

  registerMutationObserver(handleMutationObserverForUrlObservasion);
  registerMutationObserver($addLiveButtonToSearchPage);
  registerMutationObserver($addLiveButtonToChannelPage);

  registerUrlObserver($addLiveButtonToSearchPage);
  registerUrlObserver($addLiveButtonToChannelPage);

  $addLiveButtonToSearchPage();
  $addLiveButtonToChannelPage();
});


