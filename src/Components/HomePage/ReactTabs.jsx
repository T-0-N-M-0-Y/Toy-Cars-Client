import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryToys from './CategoryToys';

const ReactTabs = () => {

    const [catagoryToys, setCatagoryToys] = useState([]);


    useEffect(() => {
        fetch("https://assignment-11-car-toy-market-server.vercel.app/newtoy")
            .then(res => res.json())
            .then(data => setCatagoryToys(data))
            .catch(error => console.log(error))
    }, [])

    const sports = catagoryToys.filter(catagory => catagory.subcatagory === 'Sports');
    const classic = catagoryToys.filter(catagory => catagory.subcatagory === 'Classic');
    const regular = catagoryToys.filter(catagory => catagory.subcatagory === 'Normal car');
    const fireTruck = catagoryToys.filter(catagory => catagory.subcatagory === 'Fire Truck');
    const truck = catagoryToys.filter(catagory => catagory.subcatagory === 'Truck');
    const zip = catagoryToys.filter(catagory => catagory.subcatagory === 'Big Zip');

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
                            <Tab>Sports Cars</Tab>
                            <Tab>Classic</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="grid md:grid-cols-3 gap-5">
                                {
                                    sports.map(catagoryToy => <CategoryToys key={catagoryToy._id} catagoryToy={catagoryToy}></CategoryToys>)
                                }
                            </div>
                        </TabPanel>

                        <TabPanel>
                            <div className="grid md:grid-cols-3 gap-5">
                                {
                                    classic.map(catagoryToy => <CategoryToys key={catagoryToy._id} catagoryToy={catagoryToy}></CategoryToys>)
                                }
                            </div>
                        </TabPanel>
                    </Tabs>
                </TabPanel>

                <TabPanel>
                    <Tabs>
                        <TabList>
                            <Tab>Regular Cars</Tab>
                            <Tab>Big Zip</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="grid md:grid-cols-3 gap-5">
                                {
                                    regular.map(catagoryToy => <CategoryToys key={catagoryToy._id} catagoryToy={catagoryToy}></CategoryToys>)
                                }
                            </div>
                        </TabPanel>

                        <TabPanel>
                            <div className="grid md:grid-cols-3 gap-5">
                                {
                                    zip.map(catagoryToy => <CategoryToys key={catagoryToy._id} catagoryToy={catagoryToy}></CategoryToys>)
                                }
                            </div>
                        </TabPanel>
                    </Tabs>
                </TabPanel>

                <TabPanel>
                    <Tabs>
                        <TabList>
                            <Tab>Mini Trucks</Tab>
                            <Tab>Fire Trucks</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="grid grid-cols-3 gap-5">
                                {
                                    truck.map(catagoryToy => <CategoryToys key={catagoryToy._id} catagoryToy={catagoryToy}></CategoryToys>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-3 gap-5">
                                {
                                    fireTruck.map(catagoryToy => <CategoryToys key={catagoryToy._id} catagoryToy={catagoryToy}></CategoryToys>)
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