import { Stack, Text, Slider } from "@mantine/core";
import { useBeatdrop } from "@/hooks";

export default function BirthDayPlace() {
    const {
        timer,
        volume,
        setVolume

    } = useBeatdrop({
        audioSrc: "/musics/strobe.mp3",
        beatDropOn: new Date(2025, 0, 27, 22, 57, 0),
        beatDropPosition: 6 * 60 + 47.40
    })

    return (
        <Stack w={"100%"} h="100%" align="center">
            {new Date() < new Date(2025, 3, 11) ? (
                <Text fz="h3" ta="center">
                    Nothing is here <br />
                    Check back later
                </Text>
            ) : (
                <>
                    <Text fz="h2" bd={"3px solid white"} bg={"black"} w={"100%"} py={"md"} ta={"center"}>
                        {timer}
                    </Text>

                    <Slider
                        min={0}
                        max={1}
                        step={0.05}
                        w={200}
                        onChange={setVolume}
                        value={volume}
                    />
                </>
            )}
        </Stack>
    );
}
