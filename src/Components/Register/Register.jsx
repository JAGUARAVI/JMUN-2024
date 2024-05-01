import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

function Component() {
    return (
        <div className="pt-[10vh] w-full min-h-[100vh] flex justify-center">
            <div className="w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] p-8">
                <Tabs fullWidth aria-label="Options" classNames={{
                    tab: ["text-lg font-moderate"],
                }}>
                    <Tab key="delegate" title="Delegate Registration Form">
                        <Card>
                            <div className="h-[80vh] w-full">
                                <iframe className="w-full h-full" src="https://docs.google.com/forms/d/e/1FAIpQLSfmT2Z3gF2sMBcRMu6Yy5PPf-2FSoOVKAbKEOHqZsD__78mCw/viewform" />
                            </div>
                        </Card>
                    </Tab>
                    <Tab key="gps" title="GPS Registration Form">
                        <Card>
                            <div className="h-[80vh] w-full">
                                <iframe className="w-full h-full" src="https://docs.google.com/forms/d/e/1FAIpQLSfNlLBfc4ISWGJiyntqsG9UoyFAuaXRq33kR6EgimSz9V7DtA/viewform" />
                            </div>
                        </Card>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}


export default Component;