txt = File.open('array.txt','r').read
parts = txt.split(',')
# we need to go by 3s
puts "window.Markov.V0 = [];"
j = 1
buffer = []
parts.length.times do |i|
	buffer << parts[i].strip.gsub("D0",'')
	if buffer.length == 3 then
		puts "window.Markov.V0[ #{j} ] = [ #{buffer.join(',')} ];"
		buffer = []
		j += 1
	end
end
