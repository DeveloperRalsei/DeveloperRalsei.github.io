import React, { useState } from 'react'
import { Tooltip, List, Text, Image, useMantineTheme, Anchor } from '@mantine/core'
import Card from './Card'

const AboutMe: React.FC = () => {
  const [TURKIYEEEEE, setTURKIYEEEEE] = useState<string>("Turkey")
  
  const theme = useMantineTheme()
  return <Card
    title='About Me'
    icon={
      <Tooltip label=":3" position='left' withArrow>
        <img
          src='/images/sprites/ralsei_happi.png'
          width={20}
          style={{ marginBottom: 3 }}
        />
      </Tooltip>
    }

    withBorder

  >
    I'm: <br />
    <List icon="-">
      <List.Item>
        Transgender <Image src={"/images/trans.png"} display={"inline-block"} alt='trans' w={18} radius={3} />
      </List.Item>
      <List.Item>18 Years Old<Text size='xs' c={theme.colors.gray[6]} display={"inline"}> (11 Apr 2006)</Text></List.Item>
      <List.Item>
        <Tooltip label={<span>&#128557;</span>} withArrow position='right' >
          <Text>Single</Text>
        </Tooltip>
      </List.Item>
      <List.Item >From <span onMouseEnter={() => setTURKIYEEEEE("Türkiye")}>
        {TURKIYEEEEE}
        &nbsp;
      </span>
        <Image display={"inline"} src={"/images/as-bayraklari-as.png"} alt='as-bayraklari-as' w={15} />
      </List.Item>
      <List.Item>using <Anchor href="https://archlinux.org" target='_blank'>arch</Anchor> btw :P</List.Item>
      <List.Item>and I like ice cream&#127848;<Text size='xs' display={"inline"} c={theme.colors.gray[6]}>(it would better if it was chocolate)</Text></List.Item>
    </List>
  </Card>
}

export default AboutMe