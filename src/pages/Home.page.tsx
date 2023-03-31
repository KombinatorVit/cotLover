import React from 'react';
import {useRandomCatData} from "../api/use-random-cat-data.hook";
import CatCard from "../components/cat-card.component";
import Button from "../components/button.component";

interface HomePageProps {
}

const HomePage = ({}) => {
    const {data, isLoading, isError, fetchNextPage, isFetchingNextPage} = useRandomCatData()

    if (isError) {
        return <div> Opppsss, something wrong happened </div>
    }

    if (isLoading) return <div> Loading.....</div>
    if (!data) return <div> Noy Cats:((</div>
    return (
        <div className={'p-8'}>
            <div className={'flex flex-wrap gap-8 justify-center mb-8'}>
                {
                    data.pages.map(page => {
                        return page.map(item => (
                                <CatCard key={item.id} image={item.url}
                                         name={item.breeds?.map((el) => el.name).join(',') || 'Myrrr Cots Name'}/>

                            )
                        )
                    })
                }

            </div>
            <div className={'text-center'}><Button isLoading={isFetchingNextPage} onClick={() => fetchNextPage()}> Load
                more</Button>
            </div>
        </div>)

};

export default HomePage;