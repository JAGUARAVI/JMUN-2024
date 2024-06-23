import { useState, useEffect } from "react";
import { Tabs, Tab, Card, Skeleton } from "@nextui-org/react";

function Component() {
    const [loading1, setLoading1] = useState(true);
    const [loading2, setLoading2] = useState(true);

    useEffect(() => {
        document.title = 'Register | JMUN 2024'
    }, [])


    return (
        <div className="pt-[10vh] w-full min-h-[100vh] flex justify-center">
            <div className="w-[95vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] py-8">
                <Tabs fullWidth aria-label="Options" classNames={{
                    tab: ["text-lg font-moderate"],
                }}>
                    <Tab key="delegate" title="Delegate Registration Form">
                        <Card>
                            <Skeleton isLoaded={!loading1} classNames={{
                                content: "h-[80vh] w-full"
                            }}>
                                <iframe onLoad={() => setLoading1(false)} className="w-full h-full" src="https://docs.google.com/forms/d/e/1FAIpQLSfmT2Z3gF2sMBcRMu6Yy5PPf-2FSoOVKAbKEOHqZsD__78mCw/viewform" />
                            </Skeleton>
                        </Card>
                    </Tab>
                    <Tab key="gps" title="GPS Registration Form">
                        <Card>
                            <Skeleton isLoaded={!loading2} classNames={{
                                content: "h-[80vh] w-full"
                            }}>
                                <iframe onLoad={() => setLoading2(false)} className="w-full h-full" src="https://docs.google.com/forms/d/e/1FAIpQLSfNlLBfc4ISWGJiyntqsG9UoyFAuaXRq33kR6EgimSz9V7DtA/viewform" />
                            </Skeleton>
                        </Card>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}


export default Component;