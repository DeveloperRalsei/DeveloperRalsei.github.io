import { Image, List, Tooltip } from "@mantine/core";
import Card from "../components/Card";
import { useTranslation } from "react-i18next";
import HomeContent from "@/components/home/content";
import { UndertaleTextBox } from "@/components/UndertaleTextBox";

const Home = () => {
    const [t] = useTranslation();
    return (
        <>
            <Card
                pos={"relative"}
                mb={40}
                withBorder
                title={t("home.title")}
                tcolor="grape"
                icon={
                    <Tooltip label="Happii! :D" position="left" withArrow>
                        <Image
                            src={"/images/sprites/ralsei_happi.png"}
                            alt="Happii! :D"
                            w={25}
                            radius={3}
                        />
                    </Tooltip>
                }
            >
                <List>
                    <HomeContent />
                </List>
            </Card>
        </>
    );
};

export default Home;
