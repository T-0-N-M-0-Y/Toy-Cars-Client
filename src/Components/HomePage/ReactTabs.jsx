import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Sports from './Sports';
import Classic from './Classic';

const ReactTabs = () => {

    const [catagoryToys, setCatagoryToys] = useState([]);


    useEffect(() => {
        fetch("https://assignment-11-car-toy-market-server.vercel.app/newtoy")
            .then(res => res.json())
            .then(data => setCatagoryToys(data))
            .catch(error => console.log(error))
    }, [])


    const filterCatagory = (catagoryName) => {
        const selectedCatagory = catagoryToys.filter((catagory) => {
            return catagory.subcatagory === catagoryName;
        });
        setCatagoryToys(selectedCatagory);
    }


    return (
        <div className='md:px-20 px-5 py-10'>
            <Tabs>
                <TabList>
                    <Tab>S+ Cars</Tab>
                    <Tab>A+ Cars</Tab>
                    <Tab>B+ Cars</Tab>
                </TabList>

                <TabPanel>
                    <Tabs>
                        <TabList>
                            <Tab onClick={() => filterCatagory('Sports')}>Sports Cars</Tab>
                            <Tab onClick={() => filterCatagory('Classic')}>Classic</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="grid md:grid-cols-3 gap-5">
                                {
                                    catagoryToys && catagoryToys.map(catagoryToy => <Sports key={catagoryToy._id} catagoryToy={catagoryToy}></Sports>)
                                }
                            </div>
                        </TabPanel>

                        <TabPanel>
                            <div className="grid md:grid-cols-3 gap-5">
                                {
                                    catagoryToys && catagoryToys.map(catagoryToy => <Classic key={catagoryToy._id} catagoryToy={catagoryToy}></Classic>)
                                }
                            </div>
                        </TabPanel>
                    </Tabs>
                </TabPanel>

                <TabPanel>
                    <Tabs>
                        <TabList>
                            <Tab onClick={() => filterCatagory('Normal car')}>Regular Cars</Tab>
                            <Tab onClick={() => filterCatagory('Big Zip')}>Big Zip</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="grid md:grid-cols-3 gap-5">
                                {
                                    catagoryToys && catagoryToys.map(catagoryToy => <Sports key={catagoryToy._id} catagoryToy={catagoryToy}></Sports>)
                                }
                            </div>
                        </TabPanel>

                        <TabPanel>
                            <div className="grid md:grid-cols-3 gap-5">
                                {
                                    catagoryToys && catagoryToys.map(catagoryToy => <Sports key={catagoryToy._id} catagoryToy={catagoryToy}></Sports>)
                                }
                            </div>
                        </TabPanel>
                    </Tabs>
                </TabPanel>

                <TabPanel>
                    <Tabs>
                        <TabList>
                            <Tab onClick={() => filterCatagory('Truck')}>Mini Trucks</Tab>
                            <Tab onClick={() => filterCatagory('Fire Truck')}>Fire Trucks</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="grid grid-cols-3 gap-5">
                                {
                                    catagoryToys && catagoryToys.map(catagoryToy => <Sports key={catagoryToy._id} catagoryToy={catagoryToy}></Sports>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-3 gap-5">
                                {
                                    catagoryToys && catagoryToys.map(catagoryToy => <Sports key={catagoryToy._id} catagoryToy={catagoryToy}></Sports>)
                                }
                            </div>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReactTabs;