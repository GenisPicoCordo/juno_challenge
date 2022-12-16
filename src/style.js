const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",

    billing: "flex-1 text-center justify-items-center	flex-col xl:px-0 sm:px-16 px-6",
    billing1: "flex flex-row justify-between items-center w-full",
    billing2: "flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-gradient ss:leading-[100.8px] leading-[75px]",
    billing3: "flex justify-center items-center",
    billing4: "text-center max-w-[600px] mt-5 mb-8",
    billing5: "flex items-center justify-center container mx-auto",
    billing6: "flex items-center justify-center min-h-screen container mx-auto",
    billing7: "grid md:grid-cols-2",
    billing8: "absolute z-[-2] w-[40%] h-[35%] top-0 pink__gradient",
    billing9: "absolute z-[-1] w-[80%] h-[80%] rounded-full white__gradient bottom-40",
    billing10: "absolute z-[-2] w-[50%] h-[50%] right-20 bottom-20 blue__gradient",

    business: "flex p-6 rounded-[20px]",
    business1: "w-[64px] h-[64px] rounded-full",
    business2: "flex-1 flex flex-col ml-3",
    business3: "font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1",
    business4: "font-poppins font-normal text-dimWhite text-[16px] leading-[24px]",
    business5: "flex mx-10 w-[300px]",

    downloads: "max-w-[470px] mt-10 mb-10",
    downloads1: "font-poppins font-medium text-[20px] leading-[23.4px] text-gradient",
    downloads2: "flex justify-between items-center py-5 px-8 relative z-[5]",

    footer: "w-full flex pt-6 border-t-[1px] border-t-[#3F3E45]",
    footer1: "w-[438px] h-[100px] object-contain",
    footer2: "md:flex-row flex-col mb-8 w-full",
    footer3: "flex-[1] flex flex-col justify-start mr-10",
    footer4: "mt-5 font-poppins font-normal text-center text-[18px] leading-[27px] text-gradient",
    footer5: "flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10",
    footer6: "font-poppins font-normal cursor-pointer text-[20px] text-dimWhite hover:text-secondary",

    getStarted: "w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer",
    getStarted1: "flex-col bg-primary w-[100%] h-[100%] rounded-full",
    getStarted2: "font-poppins font-medium text-[18px] leading-[23.4px]",
    getStarted3: "w-[23px] h-[23px] object-contain",
    
    hero: "flex md:flex-row flex-col",
    hero1: "flex-col xl:px-0 sm:px-16 px-6",
    hero2: "flex flex-row justify-between items-center w-full",
    hero3: "flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]",
    hero4: "font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full",
    hero5: "max-w-[470px] mt-5 mb-8",
    hero6: "ss:flex ml-20 hidden md:mr-4 mr-0",
    hero7: "ss:flex hidden md:mr-4 mr-0",
    hero8: "relative w-2/5 mx-9 flex flex-row ss:flex hidden",

    heroSlide: "h-full object-cover",

    navBar: "font-poppins font-normal cursor-pointer text-[18px] text-dimWhite hover:text-secondary",
    navBar1: "list-none sm:flex hidden justify-end items-center flex-1",
    navBar2: "sm:hidden flex flex-1 justify-end items-center",
    navBar3: "p-4 bg-black-gradient absolute top-20 right-0 mx-4 my-4 min-w-[140px] rounded-xl sidebar",
    navBar4: "list-none flex justify-end items-start flex-1 flex-col",

    prices: "mx-2 p-10 max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl feature-card",
    prices1: "block font-poppins font-medium text-7xl text-cyan-500 line-through",
    prices2: "block font-poppins font-semibold text-5xl text-white  mb-1",
    prices3: "block font-poppins font-medium text-5xl text-cyan-500",
    prices4: "font-poppins font-normal text-dimWhite text-justify text-[18px]",
    prices5: "flex my-5 gap-5",
    prices6: "place-self-center block bg-cyan-500 hover:bg-cyan-700 text-white text-xl font-bold py-2 px-4 rounded-full w-40 h-15",

    testimonialSlide1: "max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl",
    testimonialSlide2: "mt-2 py-20 px-10 place-self-end  h-full text-cyan-600 text-center align-middle text-2xl font-medium",

    gradient: "absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient",
    gradient1: "absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;