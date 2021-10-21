# rode esse script para atualizar a lista de posts no banco de dados
# a atualização deve ser feita sempre que um arquivo novo for adicionado, renomeado ou removido em /src/posts
import os
import json

files = os.listdir("src\posts") #lista dos arquivos no diretório
# print(files)

# o loop while retira o ".js" de todos as strings dentro de files
i = 0
while i < len(files):
    files[i] = files[i].replace(".js", "") 
    i += 1
# print(files)

postdb = {"postlist": files} #dicionario com a lista

postdbjson = json.dumps(postdb) #converte o dicionario em json para ser usado no jsx


file = open("src\postdb.json", "w") #cria o arquivo postdb.json dentro de src
file.write(str(postdbjson)) #passa o json para dentro do arquivo
file.close() #fecha o arquivinho owo


print(postdb)