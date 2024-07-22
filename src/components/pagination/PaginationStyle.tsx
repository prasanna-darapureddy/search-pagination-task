export const styles = {
    bgContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding:'30px',
        gap:{xs: 1, sm:2, md:3, lg:4},
    },
    contentContainer:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap:2,
        padding:'20px',
    },
    heading:{
        fontFamily:'Roboto',
        fontSize: {xs:'28px', md:'35px', lg:'40px'},
    },
    itemContainer:{
        display: 'flex',
        flexDirection: 'column',
        width:{xs:'200px', md:'250px'},
        border:'1px solid #c8c8c8',
    },
    image:{
        height:'250px',
        width:{xs:'200px', md:'250px'},
        borderBottom: '1px solid #c8c8c8',
    },
    text:{
        fontFamily:'Roboto',
        alignSelf: 'center',
        textAlign: 'center',
        padding:'10px',
    },
}