export const styles = {
    bgContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding:'30px',
        gap:{xs: 1, sm:2, md:3, lg:4},
    },
    heading:{
        fontFamily:'Roboto',
        fontSize: {xs:'28px', md:'35px', lg:'40px'},
    },
    inputsContainer:{
        display: {xs: 'flex'},
        flexDirection: {xs:'column', md:'row',},
        justifyContent: 'space-between',
        alignItems: 'center',
        width:'94%',
        gap:{xs: 2,},
    },
    contentContainer:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap:4,
        padding:'20px',
    },
    itemContainer:{
        display: 'flex',
        flexDirection: 'column',
        width:'250px',
        border:'1px solid #c8c8c8',
        backgroundImage:'linear-gradient(#fff, #c3dcf7, #ffff, #76c9fa)',
    },
    image:{
        height:'250px',
        width:'250px',
        borderBottom: '1px solid #c8c8c8',
    },
    text:{
        fontFamily:'Roboto',
    },
    searchContainer:{
        display: 'flex',
        border: '1px solid #c8c8c8',
        padding: '3px 15px',
        borderRadius:'10px',
        justifyContent: 'space-between',
        alignItems: 'center',
        width:'250px',
        gap:2
    },
    userInput:{
        width:'100%',
    },
    searchIcon:{
        color:'#888',
        cursor: 'pointer',
    },
    selectedText:{
        color:'red',
        fontFamily:'Roboto',
        alignSelf: 'center',
        textAlign: 'center',
        padding:'10px',
    },
    priceFilterInput:{
        width:'250px',
    },
    cardTextContainer:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px',
    },
    textContainer:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'flex-start',
        alignItems: 'flex-start',
    },
}