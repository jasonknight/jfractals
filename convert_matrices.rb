def clean(line)
	line.gsub!("alpha","ALPHA");
	lside, rside = line.split("=")
	rside = rside.gsub(/[\d\.-]+D0/) {|m| " #{m.gsub("D0",'')} " }
	rside = rside.gsub(/ALPHA\*\*\d+/) { |m| 
		num = m.scan(/(\d+)/)
		" Math.pow( ALPHA, #{num[0][0]} ) "
	}
	rside.gsub!(")/(",") / (")
	rside.gsub!("*ALPHA","* ALPHA")
	rside.gsub!("  "," ")
	rside.gsub!("ALPHA","alpha");
	indices = lside.scan(/\L\((\d+),(\d+),(\d+)\)/)
	indices = indices[0]
	lside = "L[ #{indices[0]} ][ #{indices[1]} ][ #{indices[2]} ]"
	return "\t#{lside} = #{rside.strip};"

end

puts "var L = [];"
24.times do |i|
	puts "L[ #{i + 1 } ] = [];"
	4.times do |j|
		puts "L[ #{i + 1 } ][ #{j+1} ] = [];"
	end
end
puts "function populateMatrices( alpha ) {"
File.open('matrices.fi').each_line do |line|
	puts clean(line)
end
puts "}"
puts "function populateMatricesOcta( alpha ) {"
File.open('matrices_octa.fi').each_line do |line|
	puts clean(line)
end
puts "}"
puts "function populateMatricesPara( alpha ) {"
File.open('Matrices_para.fi').each_line do |line|
	puts clean(line)
end
puts "}"

# Platonic Matrices

puts "function populatePlatonicMatricesCube( alpha ) {"
File.open('PlatonicMatrices/cube.fi').each_line do |line|
	puts clean(line)
end
puts "}"

puts "function populatePlatonicMatricesDodeca( alpha ) {"
File.open('PlatonicMatrices/dodeca.fi').each_line do |line|
	puts clean(line)
end
puts "}"

puts "function populatePlatonicMatricesIcosa( alpha ) {"
File.open('PlatonicMatrices/icosa.fi').each_line do |line|
	puts clean(line)
end
puts "}"

puts "function populatePlatonicMatricesOcta( alpha ) {"
File.open('PlatonicMatrices/octa.fi').each_line do |line|
	puts clean(line)
end
puts "}"

puts "function populatePlatonicMatricesTetra( alpha ) {"
File.open('PlatonicMatrices/tetra.fi').each_line do |line|
	puts clean(line)
end
puts "}"