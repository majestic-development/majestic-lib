## HOW DO I WORK THIS SCRIPT????

GO TO QB-CORE > CLIENT > FUNCTIONS.LUA

Look for function QBCore.Functions.Progressbar and replace your old progress bar with our one with "majestic-lib"

then step 2, look for 

function QBCore.Functions.Notify(text, texttype, length, icon)
    local message = {
        action = 'notify',
        type = texttype or 'primary',
        length = length or 5000,
    }

    if type(text) == 'table' then
        message.text = text.text or 'Placeholder'
        message.caption = text.caption or 'Placeholder'
    else
        message.text = text
    end

    if icon then
        message.icon = icon
    end

    SendNUIMessage(message)
end

and replace the function with ours "look for qb notify example inside this readme" ( check line 65 ) 


## NOTIFY

- SERVER

INFO > TriggerClientEvent('majestic-lib:notify',source, "You can write anything here." , 4000, "info")
ERROR > TriggerClientEvent('majestic-lib:notify', source,"You can write anything here." , 4000, "error")
SUCCESS > TriggerClientEvent('majestic-lib:notify',source, "You can write anything here." , 4000, "success")

## INFO BAR

- CLIENT

OPEN > TriggerEvent('majestic-lib:openinfo', "Get Car" , "Go to motel and take car.")
CLOSE > TriggerEvent('majestic-lib:closeinfo')

- SERVER

OPEN > TriggerClientEvent('majestic-lib:openinfo', source,"Get Car" , "Go to motel and take car.")
CLOSE > TriggerClientEvent('majestic-lib:closeinfo', source)


## QB Notify example edit ---------------------------------------------- 


function QBCore.Functions.Notify(text, texttype, length)
    length = length or 5000
    texttype = texttype or 'info'

    if texttype == "primary" then 
        texttype = "info"
    end



    TriggerEvent('majestic-lib:notify', text , length, texttype)
end