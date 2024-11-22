import {
  Anchor,
  Button,
  H1,
  H2,
  Paragraph,
  Separator,
  Sheet,
  useToastController,
  SwitchThemeButton,
  SwitchRouterButton,
  Stack,
  XStack,
  YStack,
  Input,
} from '@my/ui'
import { Image } from 'tamagui'
import { ChevronDown, ChevronUp, X } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { Platform } from 'react-native'
import { useLink } from 'solito/navigation'

import { ImageBackground } from 'react-native'

export function HomeScreen({ pagesMode = false }: { pagesMode?: boolean }) {
  const linkTarget = pagesMode ? '/pages-example-user' : '/user'
  const linkProps = useLink({
    href: `${linkTarget}/nate`,
  })

  return (
    <XStack f={1} jc="flex-end" ai="center" height="100%">
      <ProductDescriptionScreen />
      <SignUpScreen />
    </XStack>
  )
}

export function ProductDescriptionScreen() {
  return (
    <YStack
      f={1}
      jc="center"
      ai="center"
      gap="$2"
      p="$4"
      backgroundColor={'#990000'}
      height={'100vh'}
      maxWidth="60%"
    >
      <Image
        source={{
          uri: 'https://www.stonybrook.edu/far-beyond/img/_grid/interim-mobile-hero-1.jpg',
        }}
        width="60%"
        height="50%"
      />
      <H2 color="white">Market to the local community.</H2>
      <Paragraph color="white" textAlign="center" maxWidth="50%">
        We connect businesses directly to a vibrant market of students, faculty, and staff, and
        opening doors to unparalleled growth opportunities within the academic community.
      </Paragraph>
    </YStack>
  )
}

export function SignUpScreen() {
  return (
    <YStack f={1} jc="center" ai="center" gap="$8" p="$4" backgroundColor={'transparent'}>
      <H1 marginBottom="$10" fontStyle="italic">
        SBUMaps
      </H1>
      <YStack space="$4" width="100%" maxWidth={400}>
        <H2>Create an Account</H2>
        <Paragraph>Welcome! Select a method to sign-up:</Paragraph>
        <XStack space="$4">
          <Button
            onPress={() => console.log('Sign Up with Google pressed')}
            backgroundColor="#4285F4"
            color="white"
          >
            Sign Up with Google
          </Button>
          <Button
            onPress={() => console.log('Sign Up with NetID pressed')}
            backgroundColor="#6ebf53"
            color="white"
          >
            Sign Up with NetID
          </Button>
        </XStack>
        <Separator />
        <Paragraph>Email</Paragraph>
        <Input placeholder="Email" keyboardType="email-address" />
        <Paragraph>Password</Paragraph>
        <Input placeholder="Password" secureTextEntry />
        <Button
          marginTop={10}
          backgroundColor="#990000"
          color="white"
          onPress={() => console.log('Sign Up pressed')}
        >
          Sign Up
        </Button>
      </YStack>
    </YStack>
  )
}
