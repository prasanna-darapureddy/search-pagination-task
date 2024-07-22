import { Box, Pagination, Stack, Typography } from '@mui/material'
import { styles } from './PaginationStyle'
import { useEffect, useState } from 'react'

interface IState{
    albumsList:{
        id:number;
        albumId:number,
        title:string,
        thumbnailUrl:string,
    }[],
    pageNum: number,
}

function PaginationPage() {
    const [albumsList, setAlbumsList] = useState<IState['albumsList']>([])
    const [pageNum, setPageNum] = useState<IState['pageNum']>(1)
    const slicedList = albumsList.slice(pageNum*10-10, pageNum*10)

    useEffect(() => {
      const url = 'https://jsonplaceholder.typicode.com/photos'
      const options = {method: 'GET'}
      fetch(url, options)
      .then(response => response.json())
      .then(response => setAlbumsList(response.slice(0, 200)))
      .catch(error =>console.error(error))      
    }, [])

    const onChangePageNumber = (event: React.ChangeEvent<unknown>, page:number) => {
        setPageNum(page)
    }

  return (
    <Box sx={styles.bgContainer}>
        <Typography variant='h2' sx={styles.heading}>Pagination</Typography>
        <Box sx={styles.contentContainer}>
            {slicedList.map(album => (
                <Box key={album.id} sx={styles.itemContainer}>
                    <Box component='img' src={album.thumbnailUrl} alt={album.title} sx={styles.image}/>
                    <Typography sx={styles.text}>{album.title}</Typography>
                </Box>
            ))}            
        </Box>
        <Stack spacing={2}>
            <Pagination count={albumsList.length/10} variant="outlined" color="primary" onChange={onChangePageNumber}/>
        </Stack>
    </Box>
  )
}

export default PaginationPage
