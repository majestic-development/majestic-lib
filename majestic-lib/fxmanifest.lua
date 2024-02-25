description 'majestic-lib'
name ' majestic-lib'
author 'majestic-lib'
version 'v1.0.0'



ui_page 'html/index.html'


files {
  'html/index.html',
  'html/*.js',
  'html/*.css',
  'html/*.png',
  'html/*.JPG',
  'html/*.svg',
  'html/sounds/*.ogg',
  'html/*.woff',
  'html/*.otf',
  'html/weaponimages/*.png'
  -- 'html/othericons/*.svg'





    

}

client_scripts {
    'config.lua',
    'client.lua'

}

server_scripts {
    'config.lua',
    'server.lua'
}

exports {
  'Progress',
  'ProgressWithStartEvent',
  'ProgressWithTickEvent',
  'ProgressWithStartAndTick',
  'isDoingSomething'
}





lua54 'yes'

escrow_ignore {
  'config.lua',
  'client.lua',
  'server.lua'
}



fx_version 'adamant'
games {'gta5'}