import React, { memo } from 'react';

export const RotateUpArrow = memo(() => <svg width='400' height='240' viewBox='0 0 400 240'>
<title>Pitch Up</title>
<defs>
  <radialGradient id='gradient-bg-pitch-up' cx='196' cy='25' r='745' gradientUnits='userSpaceOnUse'>
    <stop offset='0' stopColor='#5d707c'></stop>
    <stop offset='0.25' stopColor='#546572'></stop>
    <stop offset='0.75' stopColor='#29323a'></stop>
    <stop offset='1' stopColor='#1d2328'></stop>
  </radialGradient>
  <linearGradient id='gradient-edge-pitch-up' x1='200' y1='20' x2='200' y2='380' gradientUnits='userSpaceOnUse'>
    <stop offset='0' stopColor='#fff'></stop>
    <stop offset='0.5'></stop>
  </linearGradient>
</defs>
<path className='bg' fill='url(#gradient-bg-pitch-up)' d='M297.52,179.18c-39,19.72-58.51,39.45-97.52,39.45s-58.51-19.73-97.52-39.45-78,19.72-97.51,0S63.48,21.37,200,21.37,414.54,159.45,395,179.18,336.52,159.45,297.52,179.18Z'></path>
<path className='tip' d='M277.36,37c-8.31,7.48-21,10.83-31.69,8.12,0,0-15.48-5-45.66-5-31.14,0-45.66,5-45.66,5-10.58,3-23.38-.52-31.71-8.11a198.85,198.85,0,0,1,154.72,0Z'></path>
<path className='edge' fill='url(#gradient-edge-pitch-up)' d='M6.2,180.32q-.63-.54-1.23-1.14C-14.54,159.45,63.48,21.37,200,21.37S414.54,159.45,395,179.18q-.6.6-1.23,1.14C376.39,133.8,305.75,51,200,51S23.61,133.8,6.2,180.32Z'></path>
<path className='fg' d='M117.46,112.71a1.26,1.26,0,0,1-1.65-1.89c10.94-11.69,46.36-29.28,84.31-29.28,38.45,0,73.57,18.06,84.09,29.74a1.26,1.26,0,0,1-1.69,1.86c-11.56-8.46-47.13-20.76-82.83-20.76C164.6,92.38,129.2,104.26,117.46,112.71Z'></path>
<path className='rate3' d='M199.68,149.59c-10.5,0-16.05,4.93-18.4,7.82a1.26,1.26,0,0,0,1,2h34.8a1.26,1.26,0,0,0,1-2C215.73,154.52,210.18,149.59,199.68,149.59Z'></path>
<path className='rate2' d='M199.68,134.79c-10.5,0-16.05,4.93-18.4,7.82a1.26,1.26,0,0,0,1,2h34.8a1.26,1.26,0,0,0,1-2C215.73,139.72,210.18,134.79,199.68,134.79Z'></path>
<path className='rate1' d='M199.68,120c-10.5,0-16.05,4.93-18.4,7.82a1.26,1.26,0,0,0,1,2h34.8a1.26,1.26,0,0,0,1-2C215.73,124.93,210.18,120,199.68,120Z'></path>
</svg>);

export const RotateRightArrow = memo(() => <svg width='240' height='400' viewBox='0 0 240 400'>
<title>Yaw Right</title>
<defs>
  <radialGradient id='gradient-bg-yaw-right' cx='-161.81' cy='-171.21' r='743.68' gradientUnits='userSpaceOnUse'>
    <stop offset='0' stopColor='#5d707c'></stop>
    <stop offset='0.25' stopColor='#546572'></stop>
    <stop offset='0.75' stopColor='#29323a'></stop>
    <stop offset='1' stopColor='#1d2328'></stop>
  </radialGradient>
  <linearGradient id='gradient-edge-yaw-right' x1='139.15' y1='-137.49' x2='139.15' y2='543.84' gradientUnits='userSpaceOnUse'>
    <stop offset='0' stopColor='#fff' stopOpacity='0'></stop>
    <stop offset='0.35' stopColor='#fff' stopOpacity='0.5'></stop>
    <stop offset='0.5' stopOpacity='0.5'></stop>
    <stop offset='1' stopOpacity='0.5'></stop>
  </linearGradient>
</defs>
<path className='bg' fill='url(#gradient-bg-yaw-right)' d='M60.82,297.52C41.1,258.51,21.37,239,21.37,200s19.73-58.51,39.45-97.52-19.72-78,0-97.51S218.63,63.48,218.63,200,80.55,414.54,60.82,395,80.55,336.52,60.82,297.52Z'></path>
<path className='tip' d='M203,277.35c-7.48-8.31-10.83-21-8.12-31.69,0,0,4.8-18.48,5-45.66a203.65,203.65,0,0,0-5-45.66c-3-10.58.52-23.38,8.11-31.71a198.85,198.85,0,0,1,0,154.72Z'></path>
<path className='edge' fill='url(#gradient-edge-yaw-right)' d='M59.68,6.2q.54-.63,1.14-1.23C80.55-14.54,218.63,63.48,218.63,200S80.55,414.54,60.82,395q-.6-.6-1.14-1.23C106.2,376.39,189,305.75,189,200S106.2,23.61,59.68,6.2Z'></path>
<path className='fg' d='M127.29,118.76a1.26,1.26,0,0,1,1.89-1.65c11.69,10.94,29.28,46.36,29.28,84.31,0,38.44-18.06,73.57-29.74,84.09a1.26,1.26,0,0,1-1.86-1.69c8.46-11.56,20.76-47.14,20.76-82.83C147.62,165.9,135.74,130.5,127.29,118.76Z'></path>
<path className='rate3' d='M90.41,199.68c0-10.5-4.93-16.05-7.82-18.4a1.26,1.26,0,0,0-2,1v34.8a1.26,1.26,0,0,0,2,1C85.48,215.73,90.41,210.18,90.41,199.68Z'></path>
<path className='rate2' d='M105.21,199.68c0-10.5-4.93-16.05-7.82-18.4a1.26,1.26,0,0,0-2,1v34.8a1.26,1.26,0,0,0,2,1C100.28,215.73,105.21,210.18,105.21,199.68Z'></path>
<path className='rate1' d='M120,199.68c0-10.5-4.93-16.05-7.82-18.4a1.26,1.26,0,0,0-2,1v34.8a1.26,1.26,0,0,0,2,1C115.07,215.73,120,210.18,120,199.68Z'></path>
</svg>);

export const RotateDownArrow = memo(() => <svg width='400' height='240' viewBox='0 0 400 240'>
<title>Pitch Down</title>
<defs>
  <radialGradient id='gradient-bg-pitch-down' cx='196' cy='-530' r='745' gradientUnits='userSpaceOnUse'>
    <stop offset='0' stopColor='#5d707c'></stop>
    <stop offset='0.25' stopColor='#546572'></stop>
    <stop offset='0.75' stopColor='#29323a'></stop>
    <stop offset='1' stopColor='#1d2328'></stop>
  </radialGradient>
  <linearGradient id='gradient-edge-pitch-down' x1='200' y1='-497.58' x2='200' y2='187.55' gradientUnits='userSpaceOnUse'>
    <stop offset='0' stopColor='#fff'></stop>
    <stop offset='0.35' stopColor='#fff'></stop>
    <stop offset='0.65' stopOpacity='0'></stop>
    <stop offset='1'></stop>
  </linearGradient>
</defs>
<path className='bg' fill='url(#gradient-bg-pitch-down)' d='M297.52,60.82C258.51,41.1,239,21.37,200,21.37S141.49,41.1,102.48,60.82s-78-19.72-97.51,0S63.48,218.63,200,218.63,414.54,80.55,395,60.82,336.52,80.55,297.52,60.82Z'></path>
<path className='tip' d='M277.36,203c-8.31-7.48-21-10.83-31.69-8.12,0,0-14.59,5-45.66,5s-45.66-5-45.66-5c-10.58-3-23.38.52-31.71,8.11a198.85,198.85,0,0,0,154.72,0Z'></path>
<path className='edge' fill='url(#gradient-edge-pitch-down)' d='M6.2,59.68q-.63.54-1.23,1.14C-14.54,80.55,63.48,218.63,200,218.63S414.54,80.55,395,60.82q-.6-.6-1.23-1.14C376.39,106.2,305.75,189,200,189S23.61,106.2,6.2,59.68Z'></path>
<path className='fg' d='M117.46,127.29a1.26,1.26,0,0,0-1.65,1.89c10.94,11.69,46.36,29.28,84.31,29.28,38.45,0,73.57-18.06,84.09-29.74a1.26,1.26,0,0,0-1.69-1.86c-11.56,8.46-47.13,20.76-82.83,20.76C164.6,147.62,129.2,135.74,117.46,127.29Z'></path>
<path className='rate3' d='M199.68,90.41c-10.5,0-16.05-4.93-18.4-7.82a1.26,1.26,0,0,1,1-2h34.8a1.26,1.26,0,0,1,1,2C215.73,85.48,210.18,90.41,199.68,90.41Z'></path>
<path className='rate2' d='M199.68,105.21c-10.5,0-16.05-4.93-18.4-7.82a1.26,1.26,0,0,1,1-2h34.8a1.26,1.26,0,0,1,1,2C215.73,100.28,210.18,105.21,199.68,105.21Z'></path>
<path className='rate1' d='M199.68,120c-10.5,0-16.05-4.93-18.4-7.82a1.26,1.26,0,0,1,1-2h34.8a1.26,1.26,0,0,1,1,2C215.73,115.07,210.18,120,199.68,120Z'></path>
</svg>);

export const RotateLeftArrow = memo(() => <svg width='240' height='400' viewBox='0 0 240 400'>
<title>Yaw Left</title>
<defs>
  <radialGradient id='gradient-bg-yaw-left' cx='390' cy='-170' r='745' gradientUnits='userSpaceOnUse'>
    <stop offset='0' stopColor='#5d707c'></stop>
    <stop offset='0.25' stopColor='#546572'></stop>
    <stop offset='0.75' stopColor='#29323a'></stop>
    <stop offset='1' stopColor='#1d2328'></stop>
  </radialGradient>
  <linearGradient id='gradient-edge-yaw-left' x1='100.85' y1='-138.98' x2='100.85' y2='542.36' gradientUnits='userSpaceOnUse'>
    <stop offset='0' stopColor='#fff' stopOpacity='0'></stop>
    <stop offset='0.35' stopColor='#fff' stopOpacity='0.5'></stop>
    <stop offset='0.5' stopOpacity='0.5'></stop>
    <stop offset='1' stopOpacity='0.5'></stop>
  </linearGradient>
</defs>
<path className='bg' fill='url(#gradient-bg-yaw-left)' d='M179.18,102.48c19.72,39,39.45,58.51,39.45,97.52s-19.73,58.51-39.45,97.52,19.72,78,0,97.51S21.37,336.52,21.37,200,159.45-14.54,179.18,5,159.45,63.48,179.18,102.48Z'></path>
<path className='tip' d='M37,122.65c7.48,8.31,10.83,21,8.12,31.69,0,0-5,13-5,45.66,0,28,5,45.66,5,45.66,3,10.58-.52,23.38-8.11,31.71a198.85,198.85,0,0,1,0-154.72Z'></path>
<path className='edge' fill='url(#gradient-edge-yaw-left)' d='M180.32,393.8q-.54.63-1.14,1.23C159.45,414.54,21.37,336.52,21.37,200S159.45-14.54,179.18,5q.6.6,1.14,1.23C133.8,23.61,51,94.25,51,200S133.8,376.39,180.32,393.8Z'></path>
<path className='fg' d='M112.71,281.24a1.26,1.26,0,0,1-1.89,1.65C99.13,272,81.54,236.53,81.54,198.58c0-38.44,18.06-73.57,29.74-84.09a1.26,1.26,0,0,1,1.86,1.69c-8.46,11.56-20.76,47.14-20.76,82.83C92.38,234.1,104.26,269.5,112.71,281.24Z'></path>
<path className='rate3' d='M149.59,200.32c0,10.5,4.93,16.05,7.82,18.4a1.26,1.26,0,0,0,2-1v-34.8a1.26,1.26,0,0,0-2-1C154.52,184.27,149.59,189.82,149.59,200.32Z'></path>
<path className='rate2' d='M134.79,200.32c0,10.5,4.93,16.05,7.82,18.4a1.26,1.26,0,0,0,2-1v-34.8a1.26,1.26,0,0,0-2-1C139.72,184.27,134.79,189.82,134.79,200.32Z'></path>
<path className='rate1' d='M120,200.32c0,10.5,4.93,16.05,7.82,18.4a1.26,1.26,0,0,0,2-1v-34.8a1.26,1.26,0,0,0-2-1C124.93,184.27,120,189.82,120,200.32Z'></path>
</svg>);

export const TransUpArrow = memo(() => <svg width='400' height='240' viewBox='0 0 400 240'>
<title>Translate Up</title>
<defs>
  <radialGradient id='gradient-bg-translate-up' cx='196' cy='20' r='735' gradientUnits='userSpaceOnUse'>
    <stop offset='0' stopColor='#5d707c'></stop>
    <stop offset='0.25' stopColor='#546572'></stop>
    <stop offset='0.75' stopColor='#29323a'></stop>
    <stop offset='1' stopColor='#1d2328'></stop>
  </radialGradient>
  <linearGradient id='gradient-edge-translate-up' x1='200' y1='20' x2='200' y2='380' gradientUnits='userSpaceOnUse'>
      <stop offset='0' stopColor='#fff'></stop>
      <stop offset='0.5'></stop>
      </linearGradient>
</defs>
<path className='bg' fill='url(#gradient-bg-translate-up)' d='M272.63,209.67c-40.11,12.09-105.15,12.09-145.27,0L27,187c-13.38-4-17.45-16.39-9.1-27.57L90.84,61.79c16.72-22.39,52.91-40.53,80.84-40.53h56.63c27.94,0,64.13,18.14,80.84,40.53l72.94,97.66c8.36,11.2,4.29,23.54-9.1,27.57Z'></path>
<path className='tip' d='M273.18,33.25c-5.22,4.58-12.74,7.82-19,7.82H145.81c-6.26,0-13.77-3.24-19-7.82,14.69-7.4,30.82-12,44.86-12h56.64C242.36,21.26,258.49,25.85,273.18,33.25Z'></path>
<path className='edge' fill='url(#gradient-edge-translate-up)' d='M21.37,184.52c-8.73-5.41-10.5-15.65-3.47-25.07L90.84,61.79c16.72-22.39,52.91-40.53,80.84-40.53h56.63c27.94,0,64.13,18.14,80.84,40.53l72.94,97.66c7,9.43,5.26,19.67-3.46,25.08l-69.48-93C292.44,69.11,256.25,51,228.31,51H171.68c-27.93,0-64.12,18.15-80.84,40.53Z'></path>
<path className='fg' d='M117.4,124.77l78.2-41.63a10.07,10.07,0,0,1,8.8,0l78.2,41.63a1.27,1.27,0,0,1-1.1,2.28L200,93.56l-81.51,33.49A1.27,1.27,0,0,1,117.4,124.77Z'></path>
</svg>);

export const TransRightArrow = memo(() => <svg width='240' height='400' viewBox='0 0 240 400'>
<title>Translate Right</title>
<defs>
  <radialGradient id='gradient-bg-translate-right' cx='-145' cy='-185' r='755' gradientUnits='userSpaceOnUse'>
    <stop offset='0' stopColor='#5d707c'></stop>
    <stop offset='0.25' stopColor='#546572'></stop>
    <stop offset='0.75' stopColor='#29323a'></stop>
    <stop offset='1' stopColor='#1d2328'></stop>
  </radialGradient>
  <linearGradient id='gradient-edge-translate-right' x1='135' y1='-155' x2='135' y2='550' gradientUnits='userSpaceOnUse'>
    <stop offset='0' stopColor='#fff' stopOpacity='0'></stop>
    <stop offset='0.35' stopColor='#fff' stopOpacity='0.5'></stop>
    <stop offset='0.5' stopOpacity='0.5'></stop>
    <stop offset='1' stopOpacity='0.5'></stop>
  </linearGradient>
</defs>
<path className='bg' fill='url(#gradient-bg-translate-right)' d='M30.33,272.63c-12.09-40.11-12.09-105.15,0-145.27L53,21.94C57,8.56,69.37,4.5,80.55,12.85l97.66,78c22.38,16.72,40.53,52.91,40.53,80.84v56.64c0,27.93-18.14,64.12-40.53,80.83l-97.66,78c-11.2,8.36-23.54,4.29-27.57-9.1Z'></path>
<path className='tip' d='M206.75,273.18c-4.58-5.22-7.82-12.74-7.82-19V145.81c0-6.26,3.24-13.77,7.82-19,7.4,14.69,12,30.82,12,44.86v56.64C218.74,242.36,214.15,258.49,206.75,273.18Z'></path>
<path className='edge' fill='url(#gradient-edge-translate-right)' d='M55.48,16.31c5.41-8.72,15.65-10.49,25.07-3.46l97.66,78c22.38,16.72,40.53,52.91,40.53,80.84v56.64c0,27.93-18.14,64.12-40.53,80.83l-97.66,78c-9.43,7-19.67,5.26-25.08-3.46l93-74.54c22.39-16.71,40.53-52.9,40.53-80.83V171.68c0-27.93-18.15-64.12-40.53-80.84Z'></path>
<path className='fg' d='M115.23,117.4l41.63,78.2a10.07,10.07,0,0,1,0,8.8l-41.63,78.2a1.27,1.27,0,0,1-2.28-1.1L146.44,200,113,118.5A1.27,1.27,0,0,1,115.23,117.4Z'></path>
</svg>);

export const TransDownArrow = memo(() => <svg width='400' height='240' viewBox='0 0 400 240'>
<title>Translate Down</title>
<defs>
  <radialGradient id='gradient-bg-translate-down' cx='200' cy='-500' r='725' gradientUnits='userSpaceOnUse'>
    <stop offset='0' stopColor='#5d707c'></stop>
    <stop offset='0.25' stopColor='#546572'></stop>
    <stop offset='0.75' stopColor='#29323a'></stop>
    <stop offset='1' stopColor='#1d2328'></stop>
  </radialGradient>
  <linearGradient id='gradient-edge-translate-down' x1='200' y1='-500' x2='200' y2='185' gradientUnits='userSpaceOnUse'>
    <stop offset='0' stopColor='#fff'></stop>
    <stop offset='0.35' stopColor='#fff'></stop>
    <stop offset='0.65' stopOpacity='0'></stop>
    <stop offset='1'></stop>
  </linearGradient>
</defs>
<path className='bg' fill='url(#gradient-bg-translate-down)' d='M272.63,30.33c-40.11-12.09-105.15-12.09-145.27,0L21.94,53C8.56,57,4.5,69.37,12.85,80.55l78,97.66c16.72,22.39,52.91,40.53,80.84,40.53h56.63c27.94,0,64.13-18.14,80.84-40.53l78-97.66c8.36-11.2,4.28-23.54-9.1-27.57Z'></path>
<path className='tip' d='M273.18,206.75c-5.22-4.58-12.74-7.82-19-7.82H145.81c-6.26,0-13.77,3.24-19,7.82,14.69,7.4,30.82,12,44.86,12h56.64C242.36,218.74,258.49,214.15,273.18,206.75Z'></path>
<path className='edge' fill='url(#gradient-edge-translate-down)' d='M16.31,55.48C7.58,60.89,5.82,71.13,12.85,80.55l78,97.66c16.72,22.39,52.91,40.53,80.84,40.53h56.63c27.94,0,64.13-18.14,80.84-40.53l78-97.66c7-9.43,5.26-19.67-3.47-25.08l-74.53,93C292.44,170.89,256.25,189,228.31,189H171.68c-27.93,0-64.12-18.15-80.84-40.53Z'></path>
<path className='fg' d='M117.4,115.23l78.2,41.63a10.07,10.07,0,0,0,8.8,0l78.2-41.63a1.27,1.27,0,0,0-1.1-2.28L200,146.44,118.49,113A1.27,1.27,0,0,0,117.4,115.23Z'></path>
</svg>);

export const TransLeftArrow = memo(() => <svg width='240' height='400' viewBox='0 0 240 400'>
<title>Translate Left</title>
<defs>
  <radialGradient id='gradient-bg-translate-left' cx='380' cy='-185' r='770' gradientUnits='userSpaceOnUse'>
    <stop offset='0' stopColor='#5d707c'></stop>
    <stop offset='0.25' stopColor='#546572'></stop>
    <stop offset='0.75' stopColor='#29323a'></stop>
    <stop offset='1' stopColor='#1d2328'></stop>
  </radialGradient>
  <linearGradient id='gradient-edge-translate-left' x1='100' y1='-155' x2='100' y2='550' gradientUnits='userSpaceOnUse'>
    <stop offset='0' stopColor='#fff' stopOpacity='0'></stop>
    <stop offset='0.35' stopColor='#fff' stopOpacity='0.5'></stop>
    <stop offset='0.5' stopOpacity='0.5'></stop>
    <stop offset='1' stopOpacity='0.5'></stop>
  </linearGradient>
</defs>
<path className='bg' fill='url(#gradient-bg-translate-left)' d='M209.67,127.37c12.09,40.11,12.09,105.15,0,145.27L187,378.06c-4,13.38-16.39,17.44-27.57,9.09l-97.66-78c-22.38-16.72-40.53-52.91-40.53-80.84V171.68c0-27.93,18.14-64.12,40.53-80.83l97.66-78C170.65,4.49,183,8.56,187,22Z'></path>
<path className='tip' d='M33.25,126.82c4.58,5.22,7.82,12.74,7.82,19V254.19c0,6.26-3.24,13.77-7.82,19-7.4-14.69-12-30.82-12-44.86V171.68C21.26,157.64,25.85,141.51,33.25,126.82Z'></path>
<path className='edge' fill='url(#gradient-edge-translate-left)' d='M184.52,383.69c-5.41,8.72-15.65,10.49-25.07,3.46l-97.66-78c-22.38-16.72-40.53-52.91-40.53-80.84V171.68c0-27.93,18.14-64.12,40.53-80.83l97.66-78c9.43-7,19.67-5.26,25.08,3.46l-93,74.54C69.11,107.56,51,143.75,51,171.68v56.64c0,27.93,18.15,64.12,40.53,80.84Z'></path>
<path className='fg' d='M124.77,281.34,83.14,205.67a10.09,10.09,0,0,1,0-8.81l41.63-78.2a1.27,1.27,0,0,1,2.28,1.1l-33.49,81.5,33.49,79A1.27,1.27,0,0,1,124.77,281.34Z'></path>
</svg>);
