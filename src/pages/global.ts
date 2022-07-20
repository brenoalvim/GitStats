import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  scroll-behavior: smooth;
}
   body{
    margin: 0;
    padding: 0;
    background-color: var(--brand-color); 
  }
  :root {
    --brand-color: #0f172a;
    --dark-color: #152d73;
    --mid-color: #cbd5e1;
    --light-color: #f8fafc;
    --green-color: #5ae4a8;
    --grey-color: #2c3342;
    --surface-color: #fff;
  }
  body::-webkit-scrollbar {
    width: 12px; /* width of the entire scrollbar */
  }

  body::-webkit-scrollbar-track {
    background: var(--brand-color); /* color of the tracking area */
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(
      --brand-color
    ); /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    border: 3px solid var(--brand-color); /* creates padding around scroll thumb */
  }
`
