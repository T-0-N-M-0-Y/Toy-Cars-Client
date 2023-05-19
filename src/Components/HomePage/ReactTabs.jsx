import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ReactTabs = () => {


    return (
        <div>
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
                        </TabList>

                        <TabPanel>
                            <h1>Item 1</h1>
                        </TabPanel>
                    </Tabs>
                </TabPanel>

                <TabPanel>
                    <Tabs>
                        <TabList>
                            <Tab>Regular Cars</Tab>
                        </TabList>

                        <TabPanel>
                            <h1>Item 2</h1>
                        </TabPanel>
                    </Tabs>
                </TabPanel>

                <TabPanel>
                    <Tabs>
                        <TabList>
                            <Tab>Trucks</Tab>
                        </TabList>

                        <TabPanel>
                            <h1>Item 3</h1>
                        </TabPanel>
                    </Tabs>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReactTabs;