import React, {FC, useEffect, useState} from 'react';
import Button from "./button.component";
import {Modal} from "flowbite-react";
import {useSearchParams} from "react-router-dom";
import {useSingleCatsData} from "../api/use-single-cat-data-hook";

interface CatModalProps {

}

export const CatModal: FC<CatModalProps> = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [isOpen, setIsOpen] = useState(false);


    const cat = searchParams.get('cat')

    useEffect(() => {

        setIsOpen(!!cat)

    }, [cat])

    const {data, isLoading} = useSingleCatsData({id: cat})


    const closeModel = () => setSearchParams({})

    return (


        <>

            <Modal
                show={isOpen}
                onClose={closeModel}>
                <Modal.Header>
                    {isLoading
                        ? 'Loading...'
                        : data?.breeds?.map((b) => b.name).join(',') || 'Cute kitty'}
                </Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <img src={data?.url} alt=""/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => {
                    }}>
                        I accept
                    </Button>
                    <Button
                        color="gray"
                        onClick={closeModel}
                    >
                        Decline
                    </Button>
                </Modal.Footer>
            </Modal>


        </>

    );
}



