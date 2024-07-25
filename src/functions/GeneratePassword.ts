/* eslint-disable no-useless-escape */
interface GeneratePasswordProps {
  lowercase: boolean
  uppercase: boolean
  numbers: boolean
  symbols: boolean
  emotes: boolean
  length: number
}

export function generatePassword(props: GeneratePasswordProps) {
  const charArray = [] as Array<string>
  if(props.lowercase) charArray.push("abcdefghijklmnopqrstuvwxyz")
  if(props.uppercase) charArray.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  if(props.numbers) charArray.push("0123456789")
  if(props.symbols) charArray.push("(!?@}#\]$%-&*)+[]}|/+")
  // if(props.emotes) charArray.push("😀😃😄😁😆😅🤣😂🙂🙃😉😊😇🥰😍🤩😘😗😚😙😋😛😜🤪😝🤑🤗🤭🤫🤔🤐🤨😐😑😶😶‍🌫️😏😒🙄😬😮‍💨🤥😌😔😪🤤😴😷🤒🤕🤢🤮🤧🥵🥶🥴😵😵‍💫🤯🤠🥳😎🤓🧐😕😟🙁☹️😮😯😲😳🥺😦😧😨😰😥😢😭😱😖😣😞😓😩😫🥱😤😡😠🤬😈👿💀☠️💩🤡👹👺👻👽👾🤖😺😸😹😻😼😽🙀😿😾🙈🙉🙊💋💯💢💥💫💦💨🕳️💤👋🤚🖐️✋🖖👌🤏✌️🤞🤟🤘🤙👈👉👆🖕👇☝️👍👎✊👊🤛🤜👏🙌👐🤲🤝🙏✍️💅🤳💪🦾🦿🦵🦶👂🦻👃🧠🦷🦴👀👁️👅👄👶🧒👦👧🧑👱👨🧔🧔‍♂️🧔‍♀️👨‍🦰👨‍🦱👨‍🦳👨‍🦲👩👩‍🦰🧑‍🦰👩‍🦱🧑‍🦱👩‍🦳🧑‍🦳👩‍🦲🧑‍🦲👱‍♀️👱‍♂️🧓👴👵🙍🙍‍♂️🙍‍♀️🙎🙎‍♂️🙎‍♀️🙅🙅‍♂️🙅‍♀️🙆🙆‍♂️🙆‍♀️💁💁‍♂️💁‍♀️🙋🙋‍♂️🙋‍♀️🧏🧏‍♂️🧏‍♀️🙇🙇‍♂️🙇‍♀️🤦🤦‍♂️🤦‍♀️🤷🤷‍♂️🤷‍♀️🤴👸👳👳‍♂️👳‍♀️👲🧕🤵🤵‍♂️🤵‍♀️👰👰‍♂️👰‍♀️🤰🤱👩‍🍼👨‍🍼🧑‍🍼🧍🧍‍♂️🧍‍♀️🧎🧎‍♂️🧎‍♀️💃🕺🛀🛌🧑‍🤝‍🧑👭👫👬💏👩‍❤️‍💋‍👨👨‍❤️‍💋‍👨👩‍❤️‍💋‍👩💑👩‍❤️‍👨👨‍❤️‍👨👩‍❤️‍👩💌💘💝💖💗💓💞💕💟❣️💔❤️‍🔥❤️‍🩹❤️🧡💛💚💙💜🤎🖤🤍")

  let password = ""

  while(password.length < props.length) {
    for(let i = 0; i < charArray.length; i++) {
      const randomIndex = Math.floor(Math.random() * charArray.length)
      password += charArray[randomIndex].charAt(Math.floor(Math.random() * charArray[i].length))
      if(password.length == props.length) {
        break;
      }
    }
  }
  
  return password
}
