import React from 'react'
import photoKid from '@public/images/john-boots-highland-kid.jpg'
import photoYard from '@public/images/john-boots-highland-yard.jpg'
import clsx from 'clsx'
import Image from 'next/image'

import styles from './Bio.module.css'
import richStyles from '@styles/rich-text.module.css'

const Bio = () => {
  return (
    <div className={clsx(styles.container, richStyles.richText)}>
      <h1 className={styles.heading}>This is my story...</h1>
      <div className={styles.content}>
        <div className={styles.headerImage}>
          <Image
            src={photoKid}
            alt="Boots as a kid in the snow, dressed in an army hat and coat."
            width={400}
            height={400}
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Semper viverra nam libero justo laoreet sit amet. Augue
          neque gravida in fermentum et sollicitudin ac orci phasellus. Amet est placerat in egestas
          erat imperdiet sed. Sed enim ut sem viverra aliquet eget. In nulla posuere sollicitudin
          aliquam. Vel quam elementum pulvinar etiam non quam lacus. Tempor id eu nisl nunc mi ipsum
          faucibus vitae aliquet. Pellentesque habitant morbi tristique senectus et netus. Imperdiet
          dui accumsan sit amet nulla facilisi morbi tempus iaculis. Volutpat consequat mauris nunc
          congue nisi vitae suscipit tellus. Quam adipiscing vitae proin sagittis nisl rhoncus
          mattis rhoncus urna. Enim blandit volutpat maecenas volutpat. Convallis a cras semper
          auctor. Et netus et malesuada fames. Sit amet nulla facilisi morbi. Semper auctor neque
          vitae tempus. In eu mi bibendum neque egestas congue quisque egestas.
        </p>

        <p>
          Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Pharetra convallis posuere
          morbi leo urna molestie at elementum eu. Non sodales neque sodales ut. Quis auctor elit
          sed vulputate mi sit amet mauris commodo. Quis viverra nibh cras pulvinar mattis nunc sed.
          Viverra suspendisse potenti nullam ac tortor vitae purus. Massa tincidunt nunc pulvinar
          sapien et ligula ullamcorper malesuada. Sed blandit libero volutpat sed cras. Nisi lacus
          sed viverra tellus in hac habitasse platea. Ante in nibh mauris cursus mattis molestie a.
        </p>

        <p>
          Varius sit amet mattis vulputate. Ut tellus elementum sagittis vitae. Facilisi morbi
          tempus iaculis urna id volutpat. Sapien pellentesque habitant morbi tristique senectus et
          netus et. Sed sed risus pretium quam vulputate dignissim suspendisse in est. Eget sit amet
          tellus cras adipiscing enim eu turpis egestas. Tortor consequat id porta nibh venenatis
          cras sed. Integer quis auctor elit sed vulputate mi sit. Sed adipiscing diam donec
          adipiscing tristique risus. Bibendum arcu vitae elementum curabitur vitae nunc. Amet
          consectetur adipiscing elit duis tristique sollicitudin nibh sit. Orci nulla pellentesque
          dignissim enim. Auctor urna nunc id cursus metus aliquam eleifend. Lacus suspendisse
          faucibus interdum posuere.
        </p>

        <div className={styles.footerImage}>
          <Image
            src={photoYard}
            alt="Boots standing in the front yard of his home, holding his laptop."
            width={900}
            height={506}
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default Bio
