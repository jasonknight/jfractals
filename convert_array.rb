
# we need to go by 3s
puts "Markov.V0 = [];"
puts "Markov.arrays = {};"


type = "tetra"
txt = File.open("markov_#{type}_array.txt",'r').read.gsub("\n","").gsub("\r","")
parts = txt.split(',')
j = 1
buffer = []
puts "Markov.arrays[ '#{type}' ] = [];"
parts.length.times do |i|
	buffer << parts[i].strip.gsub("D0",'').strip
	if buffer.length == 3 then
		puts "Markov.arrays[ '#{type}' ][ #{j} ] = [ #{buffer.join(',')} ];"
		buffer = []
		j += 1
	end
end

type = "octa"
txt = File.open("markov_#{type}_array.txt",'r').read
parts = txt.split(',')
j = 1
buffer = []
puts "Markov.arrays[ '#{type}' ] = [];"
parts.length.times do |i|
  buffer << parts[i].strip.gsub("D0",'')
  if buffer.length == 3 then
    puts "Markov.arrays[ '#{type}' ][ #{j} ] = [ #{buffer.join(',')} ];"
    buffer = []
    j += 1
  end
end

type = "cube"
txt = File.open("markov_#{type}_array.txt",'r').read
parts = txt.split(',')
j = 1
buffer = []
puts "Markov.arrays[ '#{type}' ] = [];"
parts.length.times do |i|
  buffer << parts[i].strip.gsub("D0",'')
  if buffer.length == 3 then
    puts "Markov.arrays[ '#{type}' ][ #{j} ] = [ #{buffer.join(',')} ];"
    buffer = []
    j += 1
  end
end

type = "icosa"
txt = File.open("markov_#{type}_array.txt",'r').read
parts = txt.split(',')
j = 1
buffer = []
puts "Markov.arrays[ '#{type}' ] = [];"
parts.length.times do |i|
  buffer << parts[i].strip.gsub("D0",'')
  if buffer.length == 3 then
    puts "Markov.arrays[ '#{type}' ][ #{j} ] = [ #{buffer.join(',')} ];"
    buffer = []
    j += 1
  end
end

type = "dodeca"
txt = File.open("markov_#{type}_array.txt",'r').read
parts = txt.split(',')
j = 1
buffer = []
puts "Markov.arrays[ '#{type}' ] = [];"
parts.length.times do |i|
  buffer << parts[i].strip.gsub("D0",'')
  if buffer.length == 3 then
    puts "Markov.arrays[ '#{type}' ][ #{j} ] = [ #{buffer.join(',')} ];"
    buffer = []
    j += 1
  end
end